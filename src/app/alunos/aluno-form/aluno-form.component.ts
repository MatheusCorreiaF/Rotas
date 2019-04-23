import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit
{
  idAluno: number;//aluno q será buscado
  aluno: any;//variavel q recebe o Aluno buscado no Service
  inscricao: Subscription;
  
  constructor(private alunosService: AlunosService,
              private route: ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.idAluno = params["id"];
        this.aluno = this.alunosService.getAluno(this.idAluno);
      }
    );
  }

  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }
}