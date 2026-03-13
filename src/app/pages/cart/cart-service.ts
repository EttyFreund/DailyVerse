import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ActionLogService from '../actions-log/actions-log-service';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
    public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

    constructor(private actionLogService: ActionLogService) { }

    getCartItems(): CartItem[] {
        return this.cartItemsSubject.getValue();
    }

    addToCart(product: Product): void {
        const items = this.getCartItems();
        const existingItem = items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
            this.actionLogService.logAction('Add unit to cart', product.name);
        } else {
            items.push({ product, quantity: 1 });
            this.actionLogService.logAction('Add new product to cart', product.name);
        }
        this.cartItemsSubject.next(items);
    }

    removeFromCart(product: Product): void {
        let items = this.getCartItems();
        const existingItem = items.find(item => item.product.id === product.id);

        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                this.actionLogService.logAction('Remove item from cart', product.name);
            } else {
                items = items.filter(item => item.product.id !== product.id);
                this.actionLogService.logAction('Delete product from cart', product.name);
            }
            this.cartItemsSubject.next(items);
        }
    }

    removeItemCompletely(product: Product): void {
        const items = this.getCartItems().filter(item => item.product.id !== product.id);
        this.actionLogService.logAction('Delete product completely from cart', product.name);
        this.cartItemsSubject.next(items);
    }

    clearCart(): void {
        this.cartItemsSubject.next([]);
        this.actionLogService.logAction('Clear cart', 'all products');
    }


  getTotalPrice(): number {
    return this.getCartItems().reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTotalQuantity(): Observable<number> {
    return this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
  }
}
