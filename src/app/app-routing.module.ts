import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'shop', component: BoutiqueComponent,/** canActivate: [AuthGuard]*/  },
  { path: 'cart', component: CartComponent, /*canActivate: [AuthGuard]*/ },
 { path: 'admin', component: AdminDashboardComponent,  },
  { path: '', redirectTo: 'shop', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'shop' } // Gestion des routes inexistantes
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
