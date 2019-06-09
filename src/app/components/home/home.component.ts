import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {ServicoService} from '../../core/api/servico/client.service';
import {DomSanitizer} from '@angular/platform-browser';
import {BlogService} from '../../core/api/blog/client.service';
import {BannerService} from '../../core/api/banner/client.service';
import {ContatoService} from '../../core/api/contato/client.service';
import {EmpresaService} from '../../core/api/empresa/client.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    public socialList;
    public blogList;
    public contato;
    public empresa;

    public bannerList: any[];
    public newsForm: FormGroup;

    constructor(private pageScrollService: PageScrollService,
                private servicoService: ServicoService,
                private blogService: BlogService,
                private bannerService: BannerService,
                private contatoService: ContatoService,
                private empresaService: EmpresaService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private sanitizer: DomSanitizer,
                @Inject(DOCUMENT) private document: any) {

        this.servicoList = [];
        this.servicoService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.servicoList = response;
            setTimeout(() => {
                this.initCarouselServicos();
            }, 500);
        });

        this.blogList = [];
        this.blogService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.blogList = response;
            setTimeout(() => {
                this.initCarouselNovidades();
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


        this.contato = [];
        this.contatoService.getContato().then((response: any) => {
            response.content.rendered = this.sanitizer.bypassSecurityTrustHtml(response.content.rendered);
            this.contato = response;
        });

        this.empresa = [];
        this.empresaService.getEmpresa().then((response: any) => {
            response.content.rendered = this.sanitizer.bypassSecurityTrustHtml(response.content.rendered);
            this.empresa = response;
        });

        this.socialList = [
            {class: 'fa-instagram'},
            {class: 'fa-facebook-square'},
            {class: 'fa-twitter'},
            {class: 'fa-youtube'},
        ];

    }

    ngOnInit() {
        // @ts-ignore
        this.pageScrollService.scroll({
            document: this.document
        });
    }

    

    initCarouselServicos() {
        $('#carousel-servicos').owlCarousel({

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

    initCarouselNovidades() {
        $('#carousel-blog').owlCarousel({

            autoPlay: 3000,
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



