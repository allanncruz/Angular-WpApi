import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {RouterModule} from '@angular/router';
import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        NgxPageScrollModule
    ],
    declarations: [
        NavBarComponent
    ],
    providers: [],
    exports: [NavBarComponent]
})
export class NavBarModule {
}
