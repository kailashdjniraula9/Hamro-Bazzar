import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { FeaturedService } from 'src/app/services/featured.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

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
    
    this.currentStatus = 'recent';

    this.featureService.getProducts(this.currentStatus).subscribe(
      data=> this.products = data
    )
   
  }

}
