import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesDetailComponent} from './services-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ServicesService} from '../../../core/api/services/client.service';

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
    ServicesService
  ]
})
export class ServicesDetailModule {
}
