import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {User} from "../model/User";
import {environment} from "../../environments/environment";
import {Movie} from "../model/Movie";
import {Person} from "../model/Person";
import {TvShow} from "../model/TvShow";
import {Genre} from "../model/Genre";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private _httpService: HttpService) {
  }

  trendMovieList(): Promise<Movie[]> {
    return new Promise<Movie[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "trending/movie/week?page=1&sort_by=popularity.desc", (res) => {
        // @ts-ignore
        const movieList: Movie[] = res.results;
        resolve(movieList);
      });
    });
  }


  trendTvShowList(): Promise<TvShow[]> {
    return new Promise<TvShow[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "trending/tv/week?page=1&sort_by=popularity.desc", (res) => {
        // @ts-ignore
        const tvShowList: TvShow[] = res.results;
        resolve(tvShowList);
      });
    });
  }

  trendPeopleList(): Promise<Person[]> {
    return new Promise<Person[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "trending/person/week?page=1&sort_by=popularity.desc", (res) => {
        // @ts-ignore
        const peopleList: Person[] = res.results;
        resolve(peopleList);
      });
    });
  }


  getMovieById(id:number): Promise<Movie> {
    return new Promise<Movie>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "movie/"+id, (res) => {
        // @ts-ignore
        const movie: Movie = res;
        resolve(movie);
      });
    });
  }


  getSimilarMovies(id: number): Promise<Movie[]> {
    return new Promise<Movie[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "movie/"+id+"/similar", (res) => {
        // @ts-ignore
        const movieList: Movie[] = res.results;
        resolve(movieList);
      });
    });
  }


  getMovieCredits(id: number): Promise<Person[]> {
    return new Promise<Person[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "movie/"+id+"/credits", (res) => {
        // @ts-ignore
        const credits: Person[] = res.cast.filter(x => x.profile_path != null);
        resolve(credits);
      });
    });
  }

  getTvShowsGenres(): Promise<Genre[]> {
    return new Promise<Genre[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "genre/movie/list", (res) => {
          // @ts-ignore
          const genres: Genre[] = res.genres;
          resolve(genres);
      });
    });
  }


  getMoviesGenres(): Promise<Genre[]> {
    return new Promise<Genre[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "genre/movie/list", (res) => {
        // @ts-ignore
        const genres: Genre[] = res.genres;
        resolve(genres);
      });
    });
  }


  getMoviesImages(id: number): Promise<String[]> {
    return new Promise<String[]>((resolve, reject) => {
      this._httpService.get<any>(environment.movieApi, "movie/"+id+"/images", (res) => {
        // @ts-ignore
        const imagePaths = res.backdrops.filter((item) => item.file_path).map((item) => item.file_path);
        resolve(imagePaths);
      });
    });
  }
}


