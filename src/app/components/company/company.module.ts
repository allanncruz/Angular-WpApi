import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyComponent} from './company.component';
import {RouterModule, Routes} from '@angular/router';
import {CompanyService} from '../../core/api/company/client.service';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
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
    CompanyComponent
  ],
  entryComponents: [],
  providers: [
    CompanyService
  ]
})
export class CompanyModule {
}
