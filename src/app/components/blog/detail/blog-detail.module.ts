import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogDetailComponent} from './blog-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {BlogService} from '../../../core/api/blog/client.service';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes,
    )
  ],
  declarations: [
    BlogDetailComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogDetailModule {
}
