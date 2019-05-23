import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServicoService} from '../../core/api/servico/client.service';
import {ServicosComponent} from './servicos.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoService
  },
  {
    path: ':id',
    loadChildren: './detail/servicos-detail.module#ServicosDetailModule'
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
    ServicosComponent
  ],
  providers: [
    ServicoService
  ]
})
export class ServicosModule {
}
