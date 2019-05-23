import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './core/helpers/auth/auth-guard.helper';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuardService],
  },
  {
    path: 'novidades',
    loadChildren: './components/novidades/novidades.module#NovidadesModule',
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'servicos',
    loadChildren: './components/servicos/servicos.module#ServicosModule',
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false, anchorScrolling: "enabled"}
    )
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})

export class AppRoutingModules {
}
