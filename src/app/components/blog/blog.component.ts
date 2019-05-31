import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../core/api/blog/client.service';
import {DomSanitizer} from '@angular/platform-browser';

declare var $;

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    public pageBlog: any;
    public blogPosts: any[];
    public isLoading: any;

    constructor(private blogService: BlogService,
                private sanitizer: DomSanitizer) {
        this.isLoading = true;
        this.blogPosts = [];
    }

    ngOnInit() {
        this.blogService.getPage().then((res: any) => {
            if (res) {
                this.pageBlog = res;
                this.pageBlog.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.pageBlog.content.rendered);
            }
            setTimeout(() => {
                this.isLoading = false;
            }, 200);
            this.updateGallery();
        });

        this.blogService.query().then((res: any[]) => {
            if (res) {
                this.blogPosts = res;
                for (let blg of this.blogPosts) {
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
