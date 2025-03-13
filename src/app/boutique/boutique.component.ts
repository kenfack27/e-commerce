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
      name: 'iPhone 15 Pro',
      description: 'Écran Super Retina XDR, puce A17 Bionic, triple caméra.',
      price: 1299,
      imageUrl: 'https://i.pinimg.com/736x/7e/37/85/7e3785b9edabb86e7d7af4518db66403.jpg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Écran AMOLED 120Hz, Snapdragon 8 Gen 3, S-Pen.',
      price: 1199,
      imageUrl: 'https://i.pinimg.com/236x/0f/57/98/0f57981d169adc45c5455ebd7a949c7b.jpg'
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      description: 'Android 14, caméra IA, écran LTPO 120Hz.',
      price: 1099,
      imageUrl: 'https://i.pinimg.com/236x/ed/93/e5/ed93e514854b5aac82409189a813db4e.jpg'
    },
    {
      id: 4,
      name: 'Xiaomi 13 Pro',
      description: 'Snapdragon 8 Gen 2, écran 144Hz, caméra Leica.',
      price: 999,
      imageUrl: 'https://i.pinimg.com/236x/4f/c1/07/4fc107fca68e7dbdd23a500b51021552.jpg'
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'Écran 2K AMOLED, charge rapide 100W.',
      price: 899,
      imageUrl: 'https://i.pinimg.com/236x/df/3d/c1/df3dc1fcf44c6685cd0fcd6282caef16.jpg'
    },
    {
      id: 6,
      name: 'Sony Xperia 1 V',
      description: 'Écran OLED 4K HDR, audio Hi-Res, caméra pro.',
      price: 1099,
      imageUrl: 'https://i.pinimg.com/236x/7b/9e/b2/7b9eb225c64e97a89fa25b14b8d95c61.jpg'
    }
  ];
  // Ajouter un produit au panier
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produit ajouté au panier ! ✅');
  }
}
