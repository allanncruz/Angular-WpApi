import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class ClientHelper {
  public clientConf: BehaviorSubject<any>;

  constructor() {
    this.clientConf = new BehaviorSubject(null);
  }
}
