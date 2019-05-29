import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IformDeactivate } from './iform-deactivate.interface';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IformDeactivate>
{
  canDeactivate(
    component: IformDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean
  {
    console.log('guarda de desativação Alunos');
    //return component.podeMudarRota ? component.podeMudarRota() : true;
    return component.podeDesativar();
  }
}
