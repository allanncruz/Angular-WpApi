import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModules} from './app-routing.modules';
import {NgUploaderModule} from 'ngx-uploader';
import {Ng2Webstorage} from 'ngx-webstorage';
import {ResourceModule} from '@ngx-resource/handler-ngx-http';
import {AuthClientHelper} from './core/helpers/auth/auth-client.helper';
import {AuthGuardService} from './core/helpers/auth/auth-guard.helper';
import {ClientHelper} from './core/helpers/client/client.helper';
import {NavBarModule} from './shared/navbar/nav-bar.module';
import {FooterModule} from './shared/footer/footer.module';
import {from} from 'rxjs';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    Ng2Webstorage.forRoot({
      prefix: 'app_name'
    }),
    ReactiveFormsModule,
    HttpClientModule,
    NgUploaderModule,
    ResourceModule.forRoot(),
    AppRoutingModules,
    NavBarModule,
    FooterModule,
    NgxPageScrollCoreModule.forRoot({duration: 1000}),
  ],
  providers: [
    AuthClientHelper,
    AuthGuardService,
    ClientHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
