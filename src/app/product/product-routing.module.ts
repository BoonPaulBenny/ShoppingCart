import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [{ path: '', component: ProductComponent },
                        { path: 'home', component: ProductComponent },
                        { path: 'product', component: ProductListComponent },
                        { path: 'cart', component: CartComponent },
                        { path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
