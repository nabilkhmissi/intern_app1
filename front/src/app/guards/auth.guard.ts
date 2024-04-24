import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthResponse } from '../models/auth-response';

export const authGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(AuthService);
  const loggedUser = <AuthResponse>(auth.getLoggedUser());
  return loggedUser ? true : false;
};
