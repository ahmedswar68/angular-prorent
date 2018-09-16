import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
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
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

// Route config let's you map routes to components   component:HomeComponent
const appRoutes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: 'en', component: HomeComponent },
  { path: 'ar', component: HomeComponent },
  // {path:'en/home',component:HomeComponent},
  // {path:'ar/home',component:HomeComponent},
  { path: 'en/products', component: ProductsComponent },
  { path: 'ar/products', component: ProductsComponent },
  { path: 'en/myOrders', component: MyOrdersComponent },
  { path: 'ar/myOrders', component: MyOrdersComponent },
  { path: 'en/shopping-cart', component: ShoppingCartComponent },
  { path: 'ar/shopping-cart', component: ShoppingCartComponent },
  { path: 'en/check-out', component: CheckOutComponent },
  { path: 'ar/check-out', component: CheckOutComponent },
  { path: 'en/order-success', component: OrderSuccessComponent },
  { path: 'ar/order-success', component: OrderSuccessComponent },
  { path: 'en/login', component: LoginComponent },
  { path: 'ar/login', component: LoginComponent },
  { path: 'en/register', component: RegisterComponent },
  { path: 'ar/register', component: RegisterComponent },
  { path: 'en/sub-categories/:id', component: SubCategoriesComponent },
  { path: 'ar/sub-categories/:id', component: SubCategoriesComponent },
  { path: 'en/admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
  { path: 'ar/admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
  { path: 'en/admin/orders', component: AdminOrdersComponent },
  { path: 'ar/admin/orders', component: AdminOrdersComponent },
  { path: 'en/myProfile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'ar/myProfile', component: MyProfileComponent, canActivate: [AuthGuard] },

  { path: '**', component: PagenotfoundComponent }
];

export const appRouterModule = RouterModule.forRoot(appRoutes, { enableTracing: false });
