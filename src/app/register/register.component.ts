import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { email: '', password: '' }; // Plus de champ "role"
  errorMessage = '';

  constructor(private authService: AuthService) {}

  register() {
    const newUser = { ...this.user, role: 'CLIENT' }; // Ajoute automatiquement le rôle CLIENT
    this.authService.register(newUser).subscribe({
      next: () => alert('Inscription réussie ! ✅ Vous êtes enregistré en tant que CLIENT.'),
      error: err => this.errorMessage = 'Erreur lors de l’inscription. Veuillez réessayer.'
    });
  }
}
