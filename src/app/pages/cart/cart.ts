import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { UsdPipe } from '../../pipes/usd-pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CartItem } from '../../models/cartItem';
import { CartService } from './cart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    UsdPipe,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartItems$!: Observable<CartItem[]>;
  totalPrice$!: Observable<number>;
  displayedColumns: string[] = ['actions', 'subtotal', 'quantity', 'price', 'name', 'image'];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
    this.totalPrice$ = this.cartItems$.pipe(
      map(() => this.cartService.getTotalPrice())
    );
  }

  addItem(item: CartItem): void {
    this.cartService.addToCart(item.product);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.product);
  }

  deleteItem(item: CartItem): void {
    this.cartService.removeItemCompletely(item.product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}