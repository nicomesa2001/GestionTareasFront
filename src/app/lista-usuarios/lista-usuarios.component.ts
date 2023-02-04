import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.usuarios = [{
      "id": 1,
      "nombre": "Ramiro",
      "apellido": "Meneses",
      "email": "ramiro.meneses@nico.com",
      "tarea": "Reunión con Baloto",
      "tipo": "Trabajo",
      "prioridad": "Alta"
    },
    {
      "id": 1,
      "nombre": "Ramiro",
      "apellido": "Meneses",
      "email": "ramiro.meneses@nico.com",
      "tarea": "Recoger al niño en el jardín",
      "tipo": "Hogar",
      "prioridad": "Media"
    },
    {
      "id": 2,
      "nombre": "Julia",
      "apellido": "Meneses",
      "email": "julia.meneses@nico.com",
      "tarea": "Gimnasio",
      "tipo": "Habito",
      "prioridad": "Alta"
    }]
  }

  private obtenerUsuarios() {
    this.usuarioService.obtenerListaDeUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    })
  }
}
