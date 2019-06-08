import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const ALUNOS_ROUTES: Routes = [//declarada uma constante(App_Routes) q sera uma array de rotas||Rotas são compostas de objetos 
  {
    path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
      { path: 'novo', component: AlunoFormComponent },
      //clicando aqui será acionado o Resolver q irá atribuir ao alunoResolve o aluno buscado pelo ID
      { path: ':id', component: AlunoDetalheComponent, resolve:{alunoResolve: AlunoDetalheResolver} },
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }]
  }]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ALUNOS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AlunosRoutingModule { }
