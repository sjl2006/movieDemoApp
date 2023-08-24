import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterCeptor } from './http-interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterCeptor, multi: true}
  ]
})
export class HttpInterceptorModule { }