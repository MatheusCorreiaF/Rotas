import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad
{
  constructor(private authService: AuthService,
    private router: Router)
    {
      
    }
    /*A rota em si e o estado da rota*/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
      console.log("Guarda de Rota: AuthGuard");
      return this.verificarAcesso();
    }
    
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean
    {
      console.log("Guarda de Rota: canLoad");
      return this.verificarAcesso();
    }

    private verificarAcesso()
    {
      if(this.authService.usuarioEstaAutenticado())
      {
        return true;
      }
      else{
        console.log("Guarda de Rota");
        this.router.navigate(['/login']);
      }
    }
    
}
