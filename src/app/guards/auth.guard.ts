import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
  constructor(private authService: AuthService,
              private router: Router)
  {

  }
             /*A rota em si e o estado da rota*/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if(this.authService.usuarioEstaAutenticado())
    {
      console.log("Guarda de Rota");
      return true;
    }
    else{
          console.log("Guarda de Rota");
          this.router.navigate(['/login']);
        }
  }

}
