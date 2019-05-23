import {Component, OnInit} from '@angular/core';
import {NovidadesService} from '../../core/api/novidades/client.service';

declare var $;

@Component({
    selector: 'app-tour-page',
    templateUrl: './novidades.component.html',
    styleUrls: ['./novidades.component.scss']
})
export class NovidadesComponent implements OnInit {
    public novidadesList: any[];
    public isLoading: any;

    constructor(private novidadesService: NovidadesService) {
        this.isLoading = true;
    }

    ngOnInit() {
        this.novidadesService.query().then((res: any) => {
            console.log('res', res);
            if (res.body) {
                this.novidadesList = res.body;
            }
            setTimeout(() => {
                $('.blocks-gallery-item figure a').attr('rel', 'galeria');
                $('.blocks-gallery-item figure  a').fancybox();

            }, 100);
            setTimeout(() => {
                this.isLoading = false;
            }, 200);
        });
    }
}
