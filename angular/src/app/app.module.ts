import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { EdituserComponent } from './pages/user/edituser/edituser.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AllproductsComponent } from './pages/product/allproducts/allproducts.component';
import { SingleproductComponent } from './pages/product/singleproduct/singleproduct.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { EditproductComponent } from './pages/product/editproduct/editproduct.component';
import { MyproductsComponent } from './pages/product/myproducts/myproducts.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AllusersComponent,
    SingleuserComponent,
    EdituserComponent,
    ProfileComponent,
    AllproductsComponent,
    SingleproductComponent,
    AddproductComponent,
    EditproductComponent,
    MyproductsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
