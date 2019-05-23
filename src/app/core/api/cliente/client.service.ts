import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

/**
 Class for the Cliente Service.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/clientes'
})
export class ClienteService extends BaseService {
    @ResourceAction({
        path: '/{!id}',
        params: {'_embed': true}
    })
    get: IResourceMethod<{ id: any }, any>;

    @ResourceAction({
        isArray: true,
        params: {'_embed': true}
    })
    query: IResourceMethod<any, any[]>;
}
