import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IResourceMethod, ResourceAction, ResourceParams, ResourceRequestMethod} from '@ngx-resource/core';

/**
 Class for the UserResource.
 */

@Injectable()
@ResourceParams({
  url: BaseService.BASE_URL + '/v1/users'
})
export class UserResource extends BaseService {
  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/login',
    skipAuthorization: true
  })
  login: IResourceMethod<{ email: string, password: string, expand?: string }, any>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
  })
  save: IResourceMethod<any, any>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!id}'
  })
  update: IResourceMethod<any, any>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: IResourceMethod<any, any>;

  @ResourceAction({
    isArray: true
  })
  query: IResourceMethod<any, any[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!id}'
  })
  remove: IResourceMethod<{ id: any }, any>;
}
