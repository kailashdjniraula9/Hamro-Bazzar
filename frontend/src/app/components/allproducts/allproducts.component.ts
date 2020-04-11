import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

    products: Product[];

  ngOnInit() {
    this.listProducts();
  }

  listProducts(){
    this.productService.getProducts().subscribe(

      data=> this.products = data
    )
   
  }

}
