import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "src/app/app.constants";

@Injectable()
export class HttpRequestInterCeptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var apiToken = AppConstants.apiToken;
        
        if ( req.url.startsWith(AppConstants.apiRoot) && apiToken) {
            
            const newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + apiToken)
            });

            return next.handle(newReq);
        }
        else {
            return next.handle(req);
        }
    }

}
