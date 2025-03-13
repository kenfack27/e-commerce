import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  credentials = { email: '', password: '' };
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials);
  }
}
