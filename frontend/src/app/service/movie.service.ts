import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {User} from "../model/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpService: HttpService) {
  }

  addWatchList(movieId: number, userId: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._httpService.post<any>(environment.api, "movies/watchlist/"+movieId+"/"+userId, null,(res) => {
      });
    });
  }

  removeWatchList(movieId: number, userId: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._httpService.delete<any>(environment.api, "movies/watchlist/"+movieId+"/"+userId, (res) => {
      });
    });
  }

  isInWatchlist(movieId: number, userId: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._httpService.get<any>(environment.api, "movies/watchlist/"+movieId+"/"+userId,(res) => {
        // @ts-ignore
        const isInWatchList: boolean = res.length > 0;
        resolve(isInWatchList);
      });
    });
  }


}
