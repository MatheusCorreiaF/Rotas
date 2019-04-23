import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [//declarada uma constante(App_Routes) q sera uma array de rotas||Rotas são compostas de objetos 
    {   path: '', //o caminho que será acesasdo 
        component: HomeComponent /*o componente que será carregado ao acessa esse caminho*/},
    {   path:'login', component: LoginComponent },
    {   path:'cursos', component: CursosComponent },
    {   path:'curso/:id', component: CursoDetalheComponent },
 //   {   path:'naoEncontrado', component: CursoNaoEncontradoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);