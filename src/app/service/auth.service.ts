import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // Connexion de l'utilisateur
  login(credentials: { email: string, password: string }) {
    return this.http.post<{ token: string, role: string }>(`${this.apiUrl}/login`, credentials).subscribe(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      this.router.navigate(['/']); // Redirige vers la page d'accueil après connexion
    });
  }

  // Inscription d'un nouvel utilisateur
  register(user: {  password: string, role: string }) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Récupérer le rôle de l'utilisateur (ADMIN ou CLIENT)
  getUserRole(): string {
    return localStorage.getItem('role') || '';
  }

  // Déconnexion de l'utilisateur
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }

  // Récupérer le token JWT
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
