import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild
{
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
  {
    //console.log(state);
    //console.log(childRoute);
    
    if(state.url.includes('editar'))
    {
      console.log("AlunosGuards guarda de rota Filha Alunos|Editar");
      
      //alert("Acesso não permitido!");
      //return false;
      //return Observable.of(false);
    }
    return true; 
  }
  
}
