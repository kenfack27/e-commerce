import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1; // Incrémente la quantité si le produit est déjà dans le panier
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  // Récupérer tous les produits du panier
  getCartItems() {
    return this.cartItems;
  }

  // Calculer le total du panier
  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Vider le panier après validation de la commande
  clearCart() {
    this.cartItems = [];
  }

  // Supprimer un produit du panier
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }
}
