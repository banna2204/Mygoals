import { Component, inject, signal } from '@angular/core';
import { Test } from '../../services/test';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productService = inject(Test);
  product = signal<Product[] | undefined>(undefined);
  
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (item) => {
        this.product.set(item);
        console.log(this.product())
      },

      error: (error) => {
        console.log(error);
      },

      complete: () => {
        console.log('complete')
      }
    })
  }
}
