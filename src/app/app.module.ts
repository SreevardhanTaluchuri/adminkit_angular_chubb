import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { ViewUserComponent } from './pages/user/view-user/view-user.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { EditProductComponent } from './pages/product/edit-product/edit-product.component';
import { ViewProductComponent } from './pages/product/view-product/view-product.component';
import { MarketComponent } from './pages/market/market.component';
import { CartComponent } from './pages/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovementComponent } from './components/movement/movement.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastComponent } from './components/toast/toast.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './routes.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent,
    ViewUserComponent,
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    ViewProductComponent,
    MarketComponent,
    CartComponent,
    CardComponent,
    CardRowComponent,
    FooterComponent,
    MenuComponent,
    MovementComponent,
    NavbarComponent,
    ToastComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
