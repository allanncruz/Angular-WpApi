import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactService} from '../../core/api/contact/client.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SenderService} from '../../core/api/contact/sender.service';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
        routes,
    ),
    ReactiveFormsModule
  ],
  declarations: [
    ContactComponent
  ],
  entryComponents: [],
  providers: [
    ContactService,
    SenderService
  ]
})
export class ContactModule {
}
