import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService
{

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno03', email: 'aluno03@email.com'}
  ];

  getAlunos()
  {
    return this.alunos;
  }

  getAluno(idAluno)
  {
    for(let i=0 ; i<this.alunos.length; i++)
    {
      if(idAluno == this.alunos[i].id)
        {return this.alunos[i];}
    }
    return null;
  }
  
  constructor() { }


}
