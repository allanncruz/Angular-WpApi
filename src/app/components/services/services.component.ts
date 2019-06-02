import {Component, OnInit} from '@angular/core';
import {ServicesService} from '../../core/api/services/client.service';
import {DomSanitizer} from '@angular/platform-browser';

declare var $;

@Component({
    selector: 'app-services-page',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
    public pageServices: any;
    public servicesPosts: any[];
    public isLoading: any;

    constructor(private servicesService: ServicesService,
                private sanitizer: DomSanitizer) {
        this.isLoading = true;
        this.servicesPosts = [];
    }

    ngOnInit() {
        this.servicesService.getPage().then((res: any) => {
            if (res) {
                this.pageServices = res;
                this.pageServices.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.pageServices.content.rendered);
            }
            setTimeout(() => {
                this.isLoading = false;
            }, 200);
            this.updateGallery();
        });

        this.servicesService.query().then((res: any[]) => {
            if (res) {
                this.servicesPosts = res;
                for (let blg of this.servicesPosts) {
                    blg.content.rendered = this.sanitizer.bypassSecurityTrustHtml(blg.content.rendered);
                }
                this.updateGallery();
            }
        });
    }

    getInterviewsFeaturedImage(blg) {
        if (blg && blg['_embedded'] && blg['_embedded']['wp:featuredmedia'] && blg['_embedded']['wp:featuredmedia'][0]) {
            return blg['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
    }

    updateGallery() {
        setTimeout(() => {
            $('.blocks-gallery-item figure a').attr('rel', 'galeria');
            $('.blocks-gallery-item figure  a').fancybox();
        }, 100);
    }

}
