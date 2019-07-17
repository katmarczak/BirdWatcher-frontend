// bundling all interceptors into one array for easier importing
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
// multi: true - tells Angular that HTTP_INTERCEPTORS is a token for a multiprovider that injects an array of values, rather than a single value