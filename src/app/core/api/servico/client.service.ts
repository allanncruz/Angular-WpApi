import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

/**
 Class for the ServicoService.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/servicos'
})
export class ServicoService extends BaseService {
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
