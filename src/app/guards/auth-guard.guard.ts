import { CanActivateFn,ActivatedRouteSnapshot,RouterStateSnapshot,Route, Router } from '@angular/router';
import { session } from '../../utils/session';
import { inject, Inject } from '@angular/core';
export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
 
 const router: Router = inject(Router);
 const protectedRoutes: string[] =  ['/transaction','/rewards'];
 return protectedRoutes.includes(state.url) && !session ? router.navigate(['/']) : true;
 
};
