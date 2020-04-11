import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  private baseUrl = "http://localhost:8080/api/v1/products"

  constructor(private httpClient: HttpClient) { }

  getProducts(theStatus: String): Observable<Product[]> {

    const searchUrl= `${this.baseUrl}/search/status?status=${theStatus}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    )
  }


}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}
