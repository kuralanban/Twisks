// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
// import { LoadingService } from '../loading/loading.service';
// import { finalize } from 'rxjs/operators';

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {

//   constructor(private loadingService: LoadingService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     const token = localStorage.getItem("token");
//     const authRequest = request.clone({
//       headers: new HttpHeaders().set("authorization", token!),
//     });

//     this.loadingService.showLoading();

//     return next.handle(authRequest).pipe(
//       finalize(() => this.loadingService.hideLoading())
//     );
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token=localStorage.getItem("token")
    const authRole=request.clone({
      headers:new HttpHeaders().set("authorization",`${token}`),
    })
    return next.handle(authRole);
  }
}
