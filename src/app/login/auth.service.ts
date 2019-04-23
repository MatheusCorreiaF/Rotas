import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() { }

  fazerLogin(usuario: Usuario)
  {
    if (usuario.nome === "qwe" && usuario.senha === "ewq")
    {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
      this.router.navigate(['/']);
    }
    else
    {      
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
    }
  }

  usuarioEstaAutenticado()
  {
    return this.usuarioAutenticado;
  }
}