import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService
{

  getCursos()
  {
    return [
      {id: 1, nome: "Java"},
      {id: 2, nome: "Angular"}
    ];
  } 

  getCurso(id: number)
  {
    let cursos = this.getCursos();
    for(let i=0; i<cursos.length; i++)
    {
      if(cursos[i].id == id)
      {
        return cursos[i];
      }
    }
    return null;
  }

  constructor() { }
}
