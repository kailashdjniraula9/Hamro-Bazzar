import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { RecentComponent } from './components/recent/recent.component';
import { HotdealsComponent } from './components/hotdeals/hotdeals.component';
import { TopsellersComponent } from './components/topsellers/topsellers.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'featured', component: FeaturedComponent
  },
  {
    path: 'topsellers', component: TopsellersComponent
  },
  {
    path: 'recent', component: RecentComponent
  },
  {
    path: 'hotdeals', component: HotdealsComponent
  },
  {
    path: 'allproducts', component: AllproductsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },{
    path: '**', component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
