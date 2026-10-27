import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, take } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class Test {
  http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/productS')
    .pipe(
      catchError((error) => {
        console.log('API ERROR', error);
        return [];
      }),
      map(item=> item.filter((item: Product)=> item.id % 2 == 0))
    )
  }

}
