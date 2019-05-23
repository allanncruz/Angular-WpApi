import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NovidadesDetailComponent} from './novidades-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {NovidadesService} from '../../../core/api/novidades/client.service';

const routes: Routes = [
  {
    path: '',
    component: NovidadesDetailComponent
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
    NovidadesDetailComponent
  ],
  providers: [
    NovidadesService
  ]
})
export class NovidadesDetailModule {
}
