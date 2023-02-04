import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private baseURL = "http://localhost:8080/apiREST/usuarios";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  registrarUsuario(usuario: Usuario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }

  eliminarUsuario(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
