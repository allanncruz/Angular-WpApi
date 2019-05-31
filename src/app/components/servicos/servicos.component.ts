import {Component, OnInit} from '@angular/core';
import {ServicoService} from '../../core/api/servico/client.service';

declare var $;

@Component({
    selector: 'app-tour-page',
    templateUrl: './servicos.component.html',
    styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
    public servicosList: any[];
    public isLoading: any;

    constructor(private servicosService: ServicoService) {
        this.isLoading = true;
    }

    ngOnInit() {
        this.servicosService.query().then((res: any) => {
            if (res.body) {
                this.servicosList = res.body;
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
