import {Injectable} from '@angular/core';
import {AuthClientHelper} from '../helpers/auth/auth-client.helper';
import {environment} from '../../../environments/environment';
import {Resource, ResourceHandler} from '@ngx-resource/core';

@Injectable()
export class BaseService extends Resource {
  public static BASE_URL = environment.apiUrl;
  public static WP_BASE_URL = environment.wpApiUrl;

  constructor(handler: ResourceHandler, private _auth: AuthClientHelper) {
    super(handler);
  }

  $getHeaders(methodOptions: any): any {
    let headers = super.$getHeaders();

    // Extending our headers with Authorization
    if (!methodOptions.skipAuthorization) {
      headers = this._auth.extendHeaders(headers);
    }

    return headers;
  }

}
