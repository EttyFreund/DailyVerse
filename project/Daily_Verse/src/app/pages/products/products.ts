import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../../component/product-details/product-details';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CategoryColorPipe } from '../../pipes/category-color-pipe';
import { UsdPipe } from '../../pipes/usd-pipe';
import { CartService } from '../cart/cart-service';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    MatCardModule,
    CategoryColorPipe,
    UsdPipe,
    MatIconModule,
    MatBadgeModule,
    RouterModule
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  cartQuantity$!: Observable<number>;

  products: Product[] = [
    {
      id: 1,
      name: 'T-shirt',
      description: 'T-shirt with a motivational quote.',
      category: 'clothes',
      price: 20.00,
      image: 's1.jpg'   
    },
    {
      id: 3,
      name: 'Diary',
      description: 'Personal designed diary.',
      category: 'inspirepages',
      price: 26.00,
      image: 'n1.jpg'             
    },
      {
      id: 4,
      name: 'Hoodie',
      description: 'Handsome hoodie.',
      category: 'clothes',
      price: 30.00,
      image: 's2.jpg'   
    },
    {
      id: 5,
      name: 'Thermal bottle',
      description: 'Metal thermal bottle.',
      category: 'beverage equipment',
      price: 30.00,
      image: 'c2.jpg'             
    },
    {
      id: 6,
      name: 'Diary and pen',
      description: 'Personal diary with attached pen.',
      category: 'inspirepages',
      price: 32.00,
      image: 'n2.jpg'             
    },
        {
      id: 7,
      name: 'Hoodie',
      description: 'Scribble print hoodie.',
      category: 'clothes',
      price: 30.00,
      image: 's3.jpg'   
    },
    {
      id: 8,
      name: 'Thermal bottle',
      description: 'A designed thermal bottle.',
      category: 'beverage equipment',
      price: 30.00,
      image: 'c3.jpg'             
    },
    {
      id: 9,
      name: 'Diary',
      description: 'A personal diary with a delicate color print',
      category: 'inspirepages',
      price: 26.00,
      image: 'n3.jpg'             
    },
      {
      id: 10,
      name: 'Hoodie',
      description: 'Hoodie with a cool saying.',
      category: 'clothes',
      price: 30.00,
      image: 's4.jpg'   
    },
    {
      id: 11,
      name: 'Thermal bottle',
      description: 'Thermal bottle with a wish.',
      category: 'beverage equipment',
      price: 30.00,
      image: 'c4.jpg'             
    },
    {
      id: 12,
      name: 'Diary',
      description: 'Task diary in a scrambled design',
      category: 'inspirepages',
      price: 26.00,
      image: 'n4.jpg'             
    },
        {
      id: 13,
      name: 'Peaked cap',
      description: 'Peaked cap for field trips.',
      category: 'clothes',
      price: 15.00,
      image: 's5.jpg'   
    },
    {
      id: 14,
      name: 'Thermal bottle',
      description: 'Set of 4 beautiful thermal bottles.',
      category: 'beverage equipment',
      price: 100.00,
      image: 'c5.jpg'             
    },
    {
      id: 16,
      name: 'Diary',
      description: 'Personal diary in dark design.',
      category: 'inspirepages',
      price: 26.00,
      image: 'n5.jpg'             
    },
      {
      id: 17,
      name: 'Socks',
      description: 'Cool socks.',
      category: 'clothes',
      price: 12.00,
      image: 's6.jpg'   
    },
    {
      id: 18,
      name: 'Thermal bottles',
      description: 'Set of 3 bottles with different wishes.',
      category: 'beverage equipment',
      price: 80.00,
      image: 'c6.jpg'             
    },
    {
      id: 19,
      name: 'Diary',
      description: 'A personal diary without fear.',
      category: 'inspirepages',
      price: 26.00,
      image: 'n6.jpg'             
    },
        {
      id: 20,
      name: 'Socks',
      description: 'Socks with a subtle bright print.',
      category: 'clothes',
      price: 12.00,
      image: 's7.jpg'   
    },
    {
      id: 21,
      name: 'Thermal bottles',
      description: 'Large thermal bottles with motivational sayings.',
      category: 'beverage equipment',
      price: 40.00,
      image: 'c7.jpg'             
    },
    {
      id: 22,
      name: 'Diary',
      description: 'Floral print school diary.',
      category: 'inspirepages',
      price: 26.00,
      image: 'n7.jpg'             
    },
      {
      id: 23,
      name: 'Socks',
      description: 'Cool socks for girls.',
      category: 'clothes',
      price: 12.00,
      image: 's8.jpg'   
    },
    {
      id: 24,
      name: 'Thermal bottle',
      description: 'Small thermal bottles with a motivational quote.',
      category: 'beverage equipment',
      price: 30.00,
      image: 'c8.jpg'             
    },
    {
      id: 25,
      name: 'Diary and pen',
      description: 'A delicate task diary with an attached pencil.',
      category: 'inspirepages',
      price: 32.00,
      image: 'n8.jpg'             
    },
        {
      id: 26,
      name: 'T-shirt',
      description: 'motivational shirt for men.',
      category: 'clothes',
      price: 20.00,
      image: 's9.jpg'   
    },
    {
      id: 27,
      name: 'Thermal bottle',
      description: 'Small thermal bottles about love.',
      category: 'beverage equipment',
      price: 30.00,
      image: 'c9.jpg'             
    },
    {
      id: 28,
      name: 'Diary',
      description: 'Task diary for teachers.',
      category: 'inspirepages',
      price: 26.00,
      image: 'n9.jpg'             
    },
      {
      id: 29,
      name: 'T-shirt',
      description: 'T-shirt with a wish.',
      category: 'clothes',
      price: 20.00,
      image: 's10.jpg'   
    },
    {
      id: 30,
      name: 'Thermal bottle',
      description: 'Medium thermos bottles on love.',
      category: 'beverage equipment',
      price: 35.00,
      image: 'c10.jpg'             
    }
  ];

  constructor(
    private dialog: MatDialog,
    private cartService: CartService
  ) {
    this.cartQuantity$ = this.cartService.getTotalQuantity();
  }

  openDetails(product: Product) {
    this.dialog.open(ProductDetailsComponent, {
      data: product,
      width: '450px',
      maxHeight: '90vh',
      disableClose: false,
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-panel'
    });
  }
}
