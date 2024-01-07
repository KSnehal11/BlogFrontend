import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authObj : AuthenticationService = inject(AuthenticationService);
  const router : Router = inject(Router)
  if(authObj.isAuthenticate()){
    return true;
  }
  else{
    router.navigate(['login'])
    return false;
  }
  
};
