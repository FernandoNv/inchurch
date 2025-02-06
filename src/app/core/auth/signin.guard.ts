import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const signinGuard: CanActivateChildFn = (childRoute, state) => {
  const service = inject(AuthService);
  const router = inject(Router);

  if (service.isSignedIn()) {
    return router.navigate(['events']);
  }

  return true;
};
