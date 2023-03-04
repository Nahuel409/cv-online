import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticacionService } from 'src/app/services/autenticacion.service';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  username = '';
  password = '';


  @ViewChild('loginForm', { static: false })
  loginForm = new NgForm([], []);


  constructor(private authService: AutenticacionService,
    private router: Router
    ) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      console.log("sesion iniciada");
      this.loginForm.resetForm(); // reinicia el formulario después de enviarlo
      this.router.navigate(['/home']);
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLogged();
  }

  logOut(): void {
    return this.authService.logout();
  }

  
}










/* export class AutenticacionService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    if (username === 'admin@admin.com' && password === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isLogged(): boolean {
    return this.isLoggedIn;
  }
     tengo esa autenticacion service   y este navbar.ts   =    export class NavbarComponent{
  username = '';
  password = '';
  showModal: boolean = true;


  @ViewChild('loginForm', { static: false })
  loginForm = new NgForm([], []);


  constructor(private authService: AutenticacionService,
    private router: Router
    ) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      console.log("sesion iniciada");
      this.loginForm.resetForm(); // reinicia el formulario después de enviarlo
      this.router.navigate(['/home']);
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLogged();
  }


  
}
quiero usar lafuncion logout en un boton que tengo creado en el navbar html */