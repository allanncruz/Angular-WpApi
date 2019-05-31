import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientHelper} from './core/helpers/client/client.helper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'base-angular-portal';

  constructor(private getConf: HttpClient,
              private clientHelper: ClientHelper) {
    this.clientHelper.clientConf.subscribe((nextValue: any) => {
    });
  }

  ngOnInit() {
    this.getConf.get('./assets/conf/conf.json').toPromise().then(conf => {
      this.clientHelper.clientConf.next(conf);
    });
  }
}
