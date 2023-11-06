import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {SuperAdminGuard} from './guard/super-admin-guard.service';
import {UserComponent} from "./dashboard/user/user.component";
import {ListingUserComponent} from "./dashboard/user/listing-user/listing-user.component";
import {ListingRoleComponent} from "./dashboard/user/listing-role/listing-role.component";
import {CustomerComponent} from "./dashboard/customer/customer.component";
import {ListingCustomerComponent} from "./dashboard/customer/listing-customer/listing-customer.component";
import {VendorComponent} from "./dashboard/vendor/vendor.component";
import {ListingVendorComponent} from "./dashboard/vendor/listing-vendor/listing-vendor.component";
import {WorkingAreaComponent} from "./dashboard/working-area/working-area.component";
import {
    ListingWorkingAreaComponent
} from "./dashboard/working-area/listing-working-area/listing-working-area.component";
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
