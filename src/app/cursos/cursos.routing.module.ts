import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const CURSOS_ROUTES: Routes = [//declarada uma constante(App_Routes) q sera uma array de rotas||Rotas são compostas de objetos 
    { path: '', component: CursosComponent},
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }]
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CURSOS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class CursosRoutingModule { }
