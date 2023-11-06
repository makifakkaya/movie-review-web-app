import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {MovieComponent} from "./detail/movie/movie.component";

const routes: Routes = [
    //{path: "", component: HomeComponent, canActivate: [AuthGuard]},
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "movie/:id", component: MovieComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
