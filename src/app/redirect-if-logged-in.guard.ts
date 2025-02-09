import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const redirectIfLoggedInGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = await authService.isLoggedIn();
  if (isLoggedIn) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
