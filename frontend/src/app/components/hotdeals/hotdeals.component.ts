import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { FeaturedService } from 'src/app/services/featured.service';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.css']
})
export class HotdealsComponent implements OnInit {

  products: Product[];
  currentStatus: String;

  constructor(private featureService: FeaturedService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(()=>{
      this.listProducts();
    })
  }

  listProducts(){
    
    this.currentStatus = 'hotdeals';

    this.featureService.getProducts(this.currentStatus).subscribe(
      data=> this.products = data
    )
   
  }
}
