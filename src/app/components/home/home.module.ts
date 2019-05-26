import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {ServicoService} from '../../core/api/servico/client.service';
import {NovidadesService} from '../../core/api/novidades/client.service';
import {BannerService} from '../../core/api/banner/client.service';
import {ContatoService} from '../../core/api/contato/client.service';
import {EmpresaService} from '../../core/api/empresa/client.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      homeRoutes,
    )
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    ServicoService,
    NovidadesService,
    BannerService,
    ContatoService,
    EmpresaService,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {
}
