import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
private URL = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.URL}/api/experiencia`);
  }
  public addExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.URL}/api/experiencia`,experiencia);
  }
  public updateExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.URL}/api/experiencia`,experiencia);
  }
  public deleteExperiencia(experienciaId: number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/api/experiencia/${experienciaId}`);
  }
}