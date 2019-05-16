import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [//declarada uma constante(App_Routes) q sera uma array de rotas||Rotas são compostas de objetos 
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule', canActivate: [AuthGuard], canActivateChild: [CursosGuard]},  
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate: [AuthGuard]},  
  {
    path: '', //o caminho que será acesasdo 
    component: HomeComponent /*o componente que será carregado ao acessa esse caminho*/,
    canActivate: [AuthGuard]/**/
  },
  { path: 'login', component: LoginComponent }
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
