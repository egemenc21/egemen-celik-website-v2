import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.STRAPI_API_KEY;

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${apiKey}`
    }
  });

  return next(authReq);
};
