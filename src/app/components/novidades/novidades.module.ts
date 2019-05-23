import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NovidadesService} from '../../core/api/novidades/client.service';
import {NovidadesComponent} from './novidades.component';

const routes: Routes = [
  {
    path: '',
    component: NovidadesService
  },
  {
    path: ':id',
    loadChildren: './detail/novidades-detail.module#NovidadesDetailModule'
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
    NovidadesComponent
  ],
  providers: [
    NovidadesService
  ]
})
export class NovidadesModule {
}
