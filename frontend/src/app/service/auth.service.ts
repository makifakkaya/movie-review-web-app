import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInUrl = environment.api+'auth/login';

  constructor(private http: HttpClient, private _userService: UserService) {
  }

  proceedLogin(UserCred: any) {
    return this.http.post(this.signInUrl, UserCred);
  }

  async isLoggedIn() {
    const currentUser = await this._userService.getCurrentUser();
    return currentUser._id == localStorage.getItem('id');
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }
  getTheMovieDbToken() {
    return 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWY0YTc1ZjY1NzI5YThiNWYzODQzOTg3NmVhOWMxYSIsInN1YiI6IjYyZjUxZDQ5NTk0Yzk0MDA3YWE2OTVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3paUodxpobsZCElEgs793zErSe58xjj07254K-PZhPU';
  }

  async isSuperAdmin() {
    const currentUser = await this._userService.getCurrentUser();
    return currentUser.role == "superadmin";
  }
}
