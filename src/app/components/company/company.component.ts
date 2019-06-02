import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../core/api/company/client.service';
import {DomSanitizer} from '@angular/platform-browser';

declare var $;

@Component({
    selector: 'app-company-page',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
    public pageCompany: any;
    public companyPosts: any[];
    public isLoading: any;

    constructor(private companyService: CompanyService,
                private sanitizer: DomSanitizer) {
        this.isLoading = true;
        this.companyPosts = [];
    }

    ngOnInit() {
        this.companyService.getPage().then((res: any) => {
            if (res) {
                this.pageCompany = res;
                this.pageCompany.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.pageCompany.content.rendered);
            }
            setTimeout(() => {
                this.isLoading = false;
            }, 200);
            this.updateGallery();
        });
    }

    getFeaturedImage() {
        return this.pageCompany['_embedded'] ? this.pageCompany['_embedded']['wp:featuredmedia'][0]['source_url'] : 'assets/img/no-img.jpg';
    }

    updateGallery() {
        setTimeout(() => {
            $('.blocks-gallery-item figure a').attr('rel', 'galeria');
            $('.blocks-gallery-item figure  a').fancybox();
        }, 100);
    }
}
