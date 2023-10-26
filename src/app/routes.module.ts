import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserComponent } from "./pages/user/user.component";
import { UsersComponent } from "./pages/users/users.component";
import { EditUserComponent } from "./pages/user/edit-user/edit-user.component";
import { CreateUserComponent } from "./pages/user/create-user/create-user.component";
import { ViewUserComponent } from "./pages/user/view-user/view-user.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductComponent } from "./pages/product/product.component";
import { CreateProductComponent } from "./pages/product/create-product/create-product.component";
import { EditProductComponent } from "./pages/product/edit-product/edit-product.component";
import { ViewProductComponent } from "./pages/product/view-product/view-product.component";
import { MarketComponent } from "./pages/market/market.component";
import { CartComponent } from "./pages/cart/cart.component";
const routes : Routes = [
    {
        path : "login",
        component : LoginComponent,
    },
    {
        path : "register",
        component : RegisterComponent,
    },
    {
        path : "dashboard",
        component : DashboardComponent,
    },
    {
        path : 'users',
        component : UsersComponent,
    },
    {
        path : 'user',
        component : UserComponent,
        children : [
            {
                path : 'create',
                component : CreateUserComponent
            },
            {
                path : 'edit/:id',
                component : EditUserComponent
            },
            {
                path : 'edit' , 
                redirectTo : 'edit/1' , 
                pathMatch : 'full'
            },
            {
                path : ":id",
                component : ViewUserComponent
            },
            {
                path : '' , 
                redirectTo : '1' , 
                pathMatch : 'full'
            }
        ]
    },
    {
        path : 'products',
        component : ProductsComponent,
    },
    {
        path : 'product',
        component : ProductComponent,
        children : [
            {
                path : 'create',
                component : CreateProductComponent
            },
            {
                path : 'edit/:id',
                component : EditProductComponent
            },
            {
                path : 'edit' , 
                redirectTo : 'edit/1' , 
                pathMatch : 'full'
            },
            {
                path : ":id",
                component : ViewProductComponent
            },
            {
                path : '' , 
                redirectTo : '1' , 
                pathMatch : 'full'
            }
        ]
    },
    {
        path : 'market',
        component : MarketComponent,
    },
    {
        path : 'cart',
        component : CartComponent,
    },
    {
        path : '' , 
        redirectTo : 'dashboard' , 
        pathMatch : 'full'},
    {
        path : '**', 
        redirectTo : 'dashboard', 
        pathMatch : 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }