import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         const token = localStorage.getItem('jwt-token');
         if(token) {
            const authReq = req.clone({ setHeaders: { 'x-auth-token': token }});
            return next.handle(authReq);
         }
         return next.handle(req);
     }
}