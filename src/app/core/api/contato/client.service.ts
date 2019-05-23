import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams, ResourceRequestMethod} from '@ngx-resource/core';

/**
 Class for the Contato Service.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/pages'
})
export class ContatoService extends BaseService {
    @ResourceAction({
        path: '/29',
        params: {'_embed': true}
    })
    getContato: IResourceMethod<any, any>;

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

    save: IResourceMethod<any, any>;
}
