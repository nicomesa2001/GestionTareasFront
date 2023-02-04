import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-registrar-usuario-tarea',
  templateUrl: './modal-registrar-usuario-tarea.component.html',
  styleUrls: ['./modal-registrar-usuario-tarea.component.css']
})
export class ModalRegistrarUsuarioTareaComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarUsuario() {
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeUsuarios();
    }, error => console.log(error));
  }

  irALaListaDeUsuarios() {
    this.router.navigate(['/usuarios']);
    // Swal('Usuario registrado', `El usuario ${this.usuario.nombre} ha sido registrado con exito`, `success`);
  }

  onSubmit() {
    this.guardarUsuario();
  }
}