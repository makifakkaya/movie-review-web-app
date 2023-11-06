import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component'
import {TokenInterceptor} from './service/token.interceptor.';
import {ErrorInterceptor} from "./service/error.interceptor";
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
    LoginComponent,
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
