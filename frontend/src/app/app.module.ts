import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductService } from './services/product.service';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { RecentComponent } from './components/recent/recent.component';
import { HotdealsComponent } from './components/hotdeals/hotdeals.component';
import { TopsellersComponent } from './components/topsellers/topsellers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    ThankyouComponent,
    LoginComponent,
    RegisterComponent,
    AllproductsComponent,
    PagenotfoundComponent,
    FeaturedComponent,
    RecentComponent,
    HotdealsComponent,
    TopsellersComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
