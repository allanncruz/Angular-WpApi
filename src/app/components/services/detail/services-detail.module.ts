import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesDetailComponent} from './services-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {BlogService} from '../../../core/api/blog/client.service';

const routes: Routes = [
  {
    path: '',
    component: ServicesDetailComponent
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
    ServicesDetailComponent
  ],
  providers: [
    BlogService
  ]
})
export class ServicesDetailModule {
}
