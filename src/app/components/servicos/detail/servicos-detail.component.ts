import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NovidadesService} from '../../../core/api/novidades/client.service';
import {ServicoService} from '../../../core/api/servico/client.service';
declare var $: any;

@Component({
  selector: 'app-tour-detail-page',
  templateUrl: './servicos-detail.component.html',
  styleUrls: ['./servicos-detail.component.scss']
})
export class ServicosDetailComponent implements OnInit {
  public servicosDetail: any;
  public servicosId: any;

  public isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private servicosService: ServicoService,
              private sanitizer: DomSanitizer) {
    this.servicosId = this.route.snapshot.paramMap.get('id');
    this.servicosDetail = null;
    this.isLoading = true;
  }

  ngOnInit() {
    this.servicosService.get({id: this.servicosId}).then(res => {
      this.servicosDetail = res;
      console.log(this.servicosDetail);
      this.servicosDetail.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.servicosDetail.content.rendered);
      this.isLoading = false;
      setTimeout(() => {
        $('.blocks-gallery-item figure a').attr('rel', 'galeria');
        $('.blocks-gallery-item figure  a').fancybox();
      }, 100);
    });
  }

  getFeaturedImage() {
    return this.servicosDetail['_embedded'] ? this.servicosDetail['_embedded']['wp:featuredmedia'][0]['source_url'] : 'assets/img/no-img.jpg';
  }
}
