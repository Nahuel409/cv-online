import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private isLoggedIn = false;
  private sesionIniciada = false;

  login(username: string, password: string): boolean {
    if (username === 'admin@admin.com' && password === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    console.log("funciona");
    this.login("","");
  }

  isLogged(): boolean {
    return this.isLoggedIn;
  }

estaLogueado(){
  if(this.isLoggedIn === true){
  true
  }else{
   false
  }
}

}
