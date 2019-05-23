import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

/**
 Class for the Banners Service.
 */

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/banners'
})
export class BannerService extends BaseService {
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
