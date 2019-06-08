import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any
    {
        console.log("AlunoDetalheResolver");
        let id = route.params['id'];//pega o ID que está na rota
        return this.alunosService.getAluno(id);//retorna o aluno peço ID
    }
}