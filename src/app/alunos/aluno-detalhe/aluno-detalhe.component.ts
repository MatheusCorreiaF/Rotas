import { AlunosService } from './../alunos.service';
import { Aluno } from './../Aluno';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit
{
  idAluno: number;//aluno q será buscado
  aluno: Aluno;//variavel q recebe o Aluno buscado no Service
  inscricao: Subscription;
  
  constructor(private alunosService: AlunosService,
              private route: ActivatedRoute,
              private router: Router)
  {

  }

  editarAluno()
  {
    console.log(this.route);
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnInit()
  {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.idAluno = params["id"];
        this.aluno = this.alunosService.getAluno(this.idAluno);
      }
    );*/
    console.log("ngOnInit: AlunoDetalheComponent");
    this.inscricao = this.route.data.subscribe(
      (info)=>{//dentre as informações disponíveis na rota, temos o objeto buscado pelo Resolver
        console.log("Recebendo o objeto Aluno do Resolver")
        this.aluno = info.alunoResolve;//que vamos atribuir ao objeto aluno
      }
    );

  }

  ngOnDestroy()
  {
    this.inscricao.unsubscribe();  
  }
}
