import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesComponent} from './services.component';
import {RouterModule, Routes} from '@angular/router';
import {ServicesService} from '../../core/api/services/client.service';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: ':id',
    loadChildren: './detail/services-detail.module#ServicesDetailModule',
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
    ServicesComponent
  ],
  entryComponents: [],
  providers: [
    ServicesService
  ]
})
export class ServicesModule {
}
