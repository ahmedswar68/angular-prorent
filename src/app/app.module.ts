import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { MainCategoriesService } from './services/main-categories/main-categories.service';
import { TranslateService } from './services/translate/translate.service';
import { TokenIntercepterService } from './services/token/token-intercepter.service';
import { AuthGuard } from './auth.guard';
import { appRouterModule } from "./app.routes";
import { TranslatePipe } from './pipes/translate.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BsNavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    PagenotfoundComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    LoginComponent,
    RegisterComponent,
    SubCategoriesComponent,
    MainCategoriesComponent,
    TranslatePipe,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule,
    HttpClientModule,
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,    
  ],
  exports: [RouterModule],
  providers: [AuthService, MainCategoriesService, AuthGuard, TranslateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
