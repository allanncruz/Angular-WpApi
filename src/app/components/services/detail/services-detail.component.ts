import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ServicesService} from '../../../core/api/services/client.service';
declare var $: any;

@Component({
  selector: 'app-services-detail-page',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.scss']
})
export class ServicesDetailComponent implements OnInit {
  public servicesDetail: any;
  public servicesId: any;

  public isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private servicesService: ServicesService,
              private sanitizer: DomSanitizer) {
    this.servicesId = this.route.snapshot.paramMap.get('id');
    this.servicesDetail = null;
    this.isLoading = true;
  }

  ngOnInit() {
    this.servicesService.get({id: this.servicesId}).then(res => {
      this.servicesDetail = res;
      this.servicesDetail.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.servicesDetail.content.rendered);
      this.isLoading = false;
      setTimeout(() => {
        $('.blocks-gallery-item figure a').attr('rel', 'galeria');
        $('.blocks-gallery-item figure  a').fancybox();

      }, 100);
    });
  }

  getFeaturedImage() {
    return this.servicesDetail['_embedded'] ? this.servicesDetail['_embedded']['wp:featuredmedia'][0]['source_url'] : 'assets/img/no-img.jpg';
  }
}
