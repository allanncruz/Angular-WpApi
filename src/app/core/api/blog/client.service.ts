import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

/**
 Class for the BlogService.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/novidades'
})
export class BlogService extends BaseService {
    @ResourceAction({
        path: '/19',
        params: {'_embed': true},
        url: BaseService.WP_BASE_URL + '/v2/pages'
    })
    getPage: IResourceMethod<any, any>;

    @ResourceAction({
        path: '/{!id}',
        params: {'_embed': true}
    })
    get: IResourceMethod<any, any>;

    @ResourceAction({
        params: {'_embed': true}
    })
    query: IResourceMethod<any, any>;
}
