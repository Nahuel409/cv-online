import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  public isLoggedIn = false;


 /*  login(username: string, password: string): boolean {
    if (username === 'admin@admin.com' && password === 'admin') {
      this.isLoggedIn = true;
    }
    console.log("aqui")
    return true;
  } */

  login(username: string, password: string): boolean {
    const validUsers = [
      { username: 'admin@admin.com', password: 'admin' },
      { username: 'user1@example.com', password: 'password1' },
      { username: 'user2@example.com', password: 'password2' },
      // Agrega aquí todas las cuentas de usuario válidas en tu sistema
    ];
  
    const user = validUsers.find(u => u.username === username && u.password === password);
    if (user) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
  


  logout(): void {
  this.isLoggedIn = false;
  }


}
