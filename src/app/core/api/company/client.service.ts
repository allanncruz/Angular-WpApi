import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

/**
 Class for the BlogService.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/a-empresa'
})
export class CompanyService extends BaseService {
    @ResourceAction({
        path: '/11',
        params: {'_embed': true},
        url: BaseService.WP_BASE_URL + '/v2/pages'
    })
    getPage: IResourceMethod<any, any>;

    @ResourceAction({
        params: {'_embed': true}
    })
    query: IResourceMethod<any, any>;
}
