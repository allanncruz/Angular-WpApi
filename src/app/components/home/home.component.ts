import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ServicoService} from '../../core/api/servico/client.service';
import {DomSanitizer} from '@angular/platform-browser';
import {BlogService} from '../../core/api/blog/client.service';
import {BannerService} from '../../core/api/banner/client.service';
import {EmpresaService} from '../../core/api/empresa/client.service';
import {ActivatedRoute} from '@angular/router';

declare let $;
declare let L;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lat: number = -5.825891;
    lng: number = -35.209701;

    lat1: number = -5.911850;
    lng1: number = -35.270668;
    zoom: number = 10;


    public servicoList;
    public blogList;
    public empresa;

    public bannerList: any[];

    constructor(private servicoService: ServicoService,
                private blogService: BlogService,
                private bannerService: BannerService,
                private empresaService: EmpresaService,
                private route: ActivatedRoute,
                private sanitizer: DomSanitizer,
                @Inject(DOCUMENT) private document: any) {

        this.servicoList = [];
        this.servicoService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.servicoList = response;
            setTimeout(() => {
                this.initCarousel();
            }, 500);
        });

        this.blogList = [];
        this.blogService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.blogList = response;
            setTimeout(() => {
                this.initCarousel();
            }, 500);
        });

        this.bannerList = [];
        this.bannerService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.bannerList = response;
            setTimeout(() => {
                this.initCarouselBanner();
            }, 500);
        });

        this.empresa = [];
        this.empresaService.getEmpresa().then((response: any) => {
            response.content.rendered = this.sanitizer.bypassSecurityTrustHtml(response.content.rendered);
            this.empresa = response;
        });

    }

    ngOnInit() {
    }



    initCarousel() {
        $('.carousel-itens').owlCarousel({

            autoPlay: 3000,
            nav: true,
            responsiveClass: true,
            responsive: {
                768: {
                    items: 3,
                    nav: true
                },
                667: {
                    items: 2,
                    nav: true
                },
                0: {
                    items: 1,
                    nav: false
                }
            }
        });
    }

    initCarouselBanner() {
        $('#carousel-banner-parent').owlCarousel({

            autoPlay: 3000,
            items: 1,
            responsiveClass: true,
            responsive: {
                667: {
                    nav: true
                },
                0: {
                    nav: false
                }
            }
        });
    }

    getFeaturedImage(item) {
        if (item && item['_embedded'] && item['_embedded']['wp:featuredmedia'] && item['_embedded']['wp:featuredmedia'][0]) {
            return item['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
    }
}



