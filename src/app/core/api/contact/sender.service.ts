import {IResourceMethod, ResourceAction, ResourceParams, ResourceRequestMethod} from '@ngx-resource/core';
import {BaseService} from '../base.service';
import {Injectable} from '@angular/core';

@Injectable()
@ResourceParams({
    url: BaseService.WP_BASE_URL + '/v2/contact/send'
})
export class SenderService extends BaseService {
    @ResourceAction({
        method: ResourceRequestMethod.Post
    })
    sendContact: IResourceMethod<any, any>;
}
