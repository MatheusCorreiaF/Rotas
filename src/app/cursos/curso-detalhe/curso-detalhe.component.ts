import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute,
              private cursosService: CursosService,
              private router: Router )
  {
    console.log(route);
    //this.id = route.params._value['id'];
    //this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params["id"];
        this.curso = this.cursosService.getCurso(this.id);  
      
        if(this.curso == null)
        {
          this.router.navigate(['/cursos/naoEncontrado']);
        }
      }
    );  
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
