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
