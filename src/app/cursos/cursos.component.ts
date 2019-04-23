import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private cursosService:CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  proximaPagina()
  {
    //this.pagina++;
    this.router.navigate(['/cursos'],{queryParams:{pagina: ++this.pagina}});
  }

  ngOnInit()
  {
    this.cursos = this.cursosService.getCursos();
    
    this.inscricao = this.route.queryParams.subscribe( //fazendo um consoleLog veremos esse QueryAparams e todas as outras propriedades disponíveis 
      (queryParams: any) =>{
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
