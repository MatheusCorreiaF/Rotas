import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';
import { IformDeactivate } from 'src/app/guards/iform-deactivate.interface';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IformDeactivate
{
  //idAluno: number;//aluno q será buscado
  aluno: any;//variavel q recebe o Aluno buscado no Service
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(private alunosService: AlunosService,
              private route: ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let idAluno = params["id"];
        this.aluno = this.alunosService.getAluno(idAluno);
      }
    );
  }

  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }

  onInput()
  {
    this.formMudou = true;
    console.log("Mudou");
  }

  podeMudarRota()
  {
    if(this.formMudou)
    {
      return confirm('Tem certeza que deseja sair da página?')
    }
    return true;
  }

  podeDesativar()
  {
    return this.podeMudarRota();
  }

}