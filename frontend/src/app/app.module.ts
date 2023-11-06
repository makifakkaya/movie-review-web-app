import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component'
import {TokenInterceptor} from './service/token.interceptor.';
import {UserComponent} from './dashboard/user/user.component';
import {ListingUserComponent} from './dashboard/user/listing-user/listing-user.component';
import {ErrorInterceptor} from "./service/error.interceptor";
import { ListingRoleComponent } from './dashboard/user/listing-role/listing-role.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { VendorComponent } from './dashboard/vendor/vendor.component';
import { WorkingAreaComponent } from './dashboard/working-area/working-area.component';
import { ListingCustomerComponent } from './dashboard/customer/listing-customer/listing-customer.component';
import { ListingVendorComponent } from './dashboard/vendor/listing-vendor/listing-vendor.component';
import { ListingWorkingAreaComponent } from './dashboard/working-area/listing-working-area/listing-working-area.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { PersonCardComponent } from './component/person-card/person-card.component';
import { MovieComponent } from './detail/movie/movie.component';
import { TvShowCardComponent } from './component/tv-show-card/tv-show-card.component';
import { CategoryCardComponent } from './component/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    ListingUserComponent,
    ListingRoleComponent,
    CustomerComponent,
    VendorComponent,
    WorkingAreaComponent,
    ListingCustomerComponent,
    ListingVendorComponent,
    ListingWorkingAreaComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
    CarouselComponent,
    PersonCardComponent,
    MovieComponent,
    TvShowCardComponent,
    CategoryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
