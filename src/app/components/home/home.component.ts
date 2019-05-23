import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {ServicoService} from '../../core/api/servico/client.service';
import {DomSanitizer} from '@angular/platform-browser';
import {NovidadesService} from '../../core/api/novidades/client.service';
import {BannerService} from '../../core/api/banner/client.service';
import {ClienteService} from '../../core/api/cliente/client.service';
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
    public servicoList;
    public socialList;
    public novidadesList;
    public clienteList;
    public contato;
    public empresa;

    public tempCliente;

    public bannerList: any[];
    public newsForm: FormGroup;

    constructor(private pageScrollService: PageScrollService,
                private servicoService: ServicoService,
                private novidadesService: NovidadesService,
                private bannerService: BannerService,
                private clienteService: ClienteService,
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

        this.novidadesList = [];
        this.novidadesService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.novidadesList = response;
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

        this.clienteList = [];
        this.clienteService.query().then((response: any[]) => {
            for (let item of response) {
                item.content.rendered = this.sanitizer.bypassSecurityTrustHtml(item.content.rendered);
            }
            this.clienteList = response;
            this.tempCliente = this.clienteList[0];
            setTimeout(() => {
                this.initCarouselCliente();
            }, 500);
        });


        this.contato = [];
        this.contatoService.getContato().then((response: any) => {
            response.content.rendered = this.sanitizer.bypassSecurityTrustHtml(response.content.rendered);
            this.contato = response;
            setTimeout(() => {
                this.loadMap();
            }, 500);
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

    changeCliente(cliente, pos) {
        this.tempCliente = cliente;

        var ele = document.getElementsByName('card-cliente');
        for (let i = 0; i < ele.length; i++) {
            ele[i].classList.remove('zoom-clientes-active');
        }
        ele[pos].classList.add('zoom-clientes-active');
    }

    loadMap() {
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap' +
                    '</a> contributors, Points &copy 2012 LINZ'
            }),
            latlng = L.latLng(-5.8150218, -35.2148318);

        var map = L.map('map', {center: latlng, zoom: 15, layers: [tiles]});

        var customIcon = L.icon({
            iconUrl: 'assets/img/map-marker.png',

            iconSize: [48, 48], // tamanho do icone
            iconAnchor: [10, 50], // ponto do ícone que irá corresponder à localização do marcador
            popupAnchor: [10, -60] // ponto a partir do qual o pop-up deve abrir em relação ao iconAnchor
        });

        var markers = [
            {
                'name': 'Celso e Harllington',
                'url': 'https://www.google.com/maps/place/CHC+Contadores+Associados/@-5.8150218,-35.2148318,15z/data=' +
                    '!4m5!3m4!1s0x0:0xd278f49b961eef38!8m2!3d-5.8150218!4d-35.2148318',
                'lat': -5.8150218,
                'lng': -35.2148318
            },
        ];

        for (var i = 0; i < markers.length; i++) {
            var markerInfo = markers[i];
            var htmlContext = '<a href="' + markerInfo.url + '" target="_blank">' + markerInfo.name + '</a>';
            var popup = L.popup()
                .setContent(htmlContext);
            var marker = L.marker([markerInfo.lat, markerInfo.lng], {icon: customIcon});
            marker.bindPopup(popup);
            marker.addTo(map);
        }
        map.addLayer(markers);
    }

    openServico(item) {
        window.open(item.link, '_blank');
    }

    openNovidades(item) {
        window.open(item.link, '_blank');
    }

    openBanner(item) {
        window.open(item.link, '_blank');
    }

    openCliente(item) {
        window.open(item.link, '_blank');
    }

    openEmpresa(item) {
        window.open(item.link, '_blank');
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
        $('#carousel-novidades').owlCarousel({

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
        $('.carousel-banner-parent').owlCarousel({

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

    initCarouselCliente() {
        $('#carousel-clientes').owlCarousel({

            autoPlay: 3000,
            responsiveClass: true,
            responsive: {
                992: {
                    items: 6,
                    nav: true
                },
                667: {
                    items: 3,
                    nav: true
                },
                0: {
                    items: 1,
                    nav: false
                }
            }
        });
    }

    getFeaturedImage(item) {
        if (item && item['_embedded'] && item['_embedded']['wp:featuredmedia'] && item['_embedded']['wp:featuredmedia'][0]) {
            return item['_embedded']['wp:featuredmedia'][0]['source_url'];
        } else {
            return 'assets/img/no-img.jpg';
        }
    }
}



