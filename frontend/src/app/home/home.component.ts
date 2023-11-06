import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../service/tmdb.service";
import {Movie} from "../model/Movie";
import {Person} from "../model/Person";
import {TvShow} from "../model/TvShow";
import {Genre} from "../model/Genre";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  popularMovies: Movie[] = [];
  popularTvShows: TvShow[] = [];
  popularPeople: Person[] = [];
  tvShowGenres: Genre[] = [];
  movieGenres: Genre[] = [];

  constructor(private _tmdbService: TmdbService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getPopularList();
  }

  async getPopularList() {
    this.popularMovies = await this._tmdbService.trendMovieList();
    this.popularTvShows = await this._tmdbService.trendTvShowList();
    this.popularPeople = await this._tmdbService.trendPeopleList();
    this.tvShowGenres = await this._tmdbService.getTvShowsGenres();
    this.movieGenres = await this._tmdbService.getMoviesGenres();
  }
}
