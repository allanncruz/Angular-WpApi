import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {BlogService} from '../../../core/api/blog/client.service';
declare var $: any;

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  public blogDetail: any;
  public blogId: any;

  public isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private blogService: BlogService,
              private sanitizer: DomSanitizer) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    this.blogDetail = null;
    this.isLoading = true;
  }

  ngOnInit() {
    this.blogService.get({id: this.blogId}).then(res => {
      this.blogDetail = res;
      this.blogDetail.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.blogDetail.content.rendered);
      this.isLoading = false;
      setTimeout(() => {
        $('.blocks-gallery-item figure a').attr('rel', 'galeria');
        $('.blocks-gallery-item figure  a').fancybox();

      }, 100);
    });
  }

  getFeaturedImage() {
    return this.blogDetail['_embedded'] ? this.blogDetail['_embedded']['wp:featuredmedia'][0]['source_url'] : 'assets/img/no-img.jpg';
  }
}
