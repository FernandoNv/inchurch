import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authenticationGuard: CanActivateChildFn = (childRoute, state) => {
  const service = inject(AuthService);
  const router = inject(Router);

  if (service.isSignedIn()) {
    return true;
  }

  return router.navigate(['']);
};
