import {LocalStorageService} from 'ngx-webstorage';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SpinnerHelper} from '../spinner/spinner.helper';
import {Observable} from 'rxjs/internal/Observable';
import swal from 'sweetalert2';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthClientHelper implements HttpInterceptor {
  public isLogged: BehaviorSubject<any> = new BehaviorSubject(false);
  public user: BehaviorSubject<any> = new BehaviorSubject(null);
  private myUser: any;

  constructor(private storage: LocalStorageService) {
    this.user.subscribe(user => {
      this.isLogged.next(!!user);
      this.myUser = user;
    });
  }

  extendHeaders(headers) {
    if (this.myUser) {
      headers.Authorization = 'Bearer ' + this.myUser.access_token;
    }
    return headers;
  }

  isGuest() {
    return null === this.getUser();
  }

  setUser(user) {
    this.user.next(user);
    this.isLogged.next(true);
    this.storage.store('user', JSON.stringify(user));
  }

  clear() {
    this.user.next([]);
    this.isLogged.next(false);
    this.storage.clear();
  }

  getUser() {
    let user = this.storage.retrieve('user');
    if (user) {
      let decUser = JSON.parse(user);
      this.user.next(decUser);
      return decUser;
    }
    return null;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        SpinnerHelper.displayLoader(false);
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.error(err.status, err);
          let errorMsg = '';

          if (err.error[0] && err.error[0].field) {
            errorMsg = err.error.map(function (e) {
              return e.message;
            }).join('\n');
          } else if (err.error[0]) {
            errorMsg = err.error.join('\n');
          } else {
            errorMsg = err.error.message;
          }

          // this.toastCtrl.create({
          //   message: errorMsg,
          //   duration: 3000
          // }).present();
          swal('Ops...', errorMsg, 'error');
        }
      }));
  }
}
