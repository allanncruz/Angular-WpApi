import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog.component';
import {RouterModule, Routes} from '@angular/router';
import {BlogService} from '../../core/api/blog/client.service';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: ':id',
    loadChildren: './detail/blog-detail.module#BlogDetailModule',
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
        routes,
    )
  ],
  declarations: [
    BlogComponent
  ],
  entryComponents: [],
  providers: [
    BlogService
  ]
})
export class BlogModule {
}
