import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product';
import { UsdPipe } from '../../pipes/usd-pipe';
import { CartService } from '../../pages/cart/cart-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
  standalone: true,
  imports: [UsdPipe, MatButtonModule]
})
export class ProductDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private cartService: CartService,
    private dialogRef: MatDialogRef<ProductDetailsComponent>
  ) {}
  
  addToCart() {
    this.cartService.addToCart(this.data);
    this.dialogRef.close();
  }
}