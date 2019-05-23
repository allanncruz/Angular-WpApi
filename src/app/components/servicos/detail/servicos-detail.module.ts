import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServicosDetailComponent} from './servicos-detail.component';
import {ServicoService} from '../../../core/api/servico/client.service';

const routes: Routes = [
  {
    path: '',
    component: ServicosDetailComponent
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
    ServicosDetailComponent
  ],
  providers: [
    ServicoService
  ]
})
export class ServicosDetailModule {
}
