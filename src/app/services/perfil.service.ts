import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

private URL = "http://localhost:8080";

  constructor(private http: HttpClient) { }


  public getInfo(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URL}/api/usuario/1`);
  }
  public updateInfo(info: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.URL}/api/usuario`, info);
  }


}
