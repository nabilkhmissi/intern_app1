import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const stagiaireGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(AuthService);
  const role = auth.getLoggedUser().role;
  return role == "STAGIAIRE"  ? true : false;
};
