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
    path: 'blog',
    loadChildren: './components/blog/blog.module#BlogModule',
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
