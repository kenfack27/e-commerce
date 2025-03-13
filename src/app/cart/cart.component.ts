import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  checkout() {
    this.orderService.placeOrder(this.cartItems).subscribe(() => {
      alert("Commande envoyée à l'admin !");
      this.cartService.clearCart();
    });
  }
}
