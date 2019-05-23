import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {NovidadesService} from '../../../core/api/novidades/client.service';
declare var $: any;

@Component({
  selector: 'app-tour-detail-page',
  templateUrl: './novidades-detail.component.html',
  styleUrls: ['./novidades-detail.component.scss']
})
export class NovidadesDetailComponent implements OnInit {
  public novidadesDetail: any;
  public novidadesId: any;

  public isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private novidadesService: NovidadesService,
              private sanitizer: DomSanitizer) {
    this.novidadesId = this.route.snapshot.paramMap.get('id');
    this.novidadesDetail = null;
    this.isLoading = true;
  }

  ngOnInit() {
    this.novidadesService.get({id: this.novidadesId}).then(res => {
      this.novidadesDetail = res;
      console.log(this.novidadesDetail);
      this.novidadesDetail.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.novidadesDetail.content.rendered);
      this.isLoading = false;
      setTimeout(() => {
        $('.blocks-gallery-item figure a').attr('rel', 'galeria');
        $('.blocks-gallery-item figure  a').fancybox();

      }, 100);
    });
  }

  getFeaturedImage() {
    return this.novidadesDetail['_embedded'] ? this.novidadesDetail['_embedded']['wp:featuredmedia'][0]['source_url'] : 'assets/img/no-img.jpg';
  }
}
