import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
  }

 

  products = [
    {
      id: 1,
      name: 'air pods',
      description: 'air pods qualité superieure',
      price: 1299,
      imageUrl: 'assets/airpod.jpeg'
    },
    {
      id: 2,
      name: 'casque  ',
      description: 'casque bluetooth',
      price: 1199,
      imageUrl: 'assets/casque.jpeg'
    },
    {
      id: 3,
      name: 'cle usb',
      description: 'cle usb 64gb',
      price: 1099,
      imageUrl: 'assets/cle.jpeg'
    },
    {
      id: 4,
      name: 'desktop',
      description: 'ordinateur de bureau 64gb ram 1tb ssd 8core',
      price: 999,
      imageUrl: 'assets/desktop.jpeg'
    },
    {
      id: 5,
      name: 'laptop',
      description: 'laptop 16gb ram 512gb ssd 4core',
      price: 899,
      imageUrl: 'assets/laptop.jpeg'
    },
    {
      id: 6,
      name: 'Scanner',
      description: 'scanner haute résolution',
      price: 1099,
      imageUrl: 'assets/scanner.jpeg'
    }
  ];
  // Ajouter un produit au panier
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produit ajouté au panier ! ✅');
  }
}
