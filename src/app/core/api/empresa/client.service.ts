import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

/**
 Class for the Empresa Service.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/pages'
})
export class EmpresaService extends BaseService {
    @ResourceAction({
        path: '/5',
        params: {'_embed': true}
    })
    getEmpresa: IResourceMethod<any, any>;

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
