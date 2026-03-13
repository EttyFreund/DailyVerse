import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../pages/cart/cart-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site',
  imports: [RouterModule, RouterOutlet, MatIconModule, MatBadgeModule, CommonModule],
  templateUrl: './site.html',
  styleUrl: './site.css',
  standalone: true
})
export class Site {
  cartQuantity$!: Observable<number>;

  constructor(private cartService: CartService) {
    this.cartQuantity$ = this.cartService.getTotalQuantity();
  }
}
