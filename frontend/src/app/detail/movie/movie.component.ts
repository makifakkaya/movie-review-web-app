import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from "../../model/Movie";
import {TmdbService} from "../../service/tmdb.service";
import {Person} from "../../model/Person";
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;
  similarMovies: Movie[] | undefined;
  movieCredits: Person[] | undefined;
  images: String[] | undefined;
  isLiked: boolean = false;

  constructor(private _tmdbService: TmdbService, private _movieService: MovieService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      if (params['id'] !== undefined) {
        // @ts-ignore
        this.isLiked = await this._movieService.isInWatchlist(params['id'], localStorage.getItem('id'));
      }
      this.movie = await this._tmdbService.getMovieById(params['id']);
      this.similarMovies = await this._tmdbService.getSimilarMovies(params['id']);
      this.movieCredits = await this._tmdbService.getMovieCredits(params['id']);
      this.images = await this._tmdbService.getMoviesImages(params['id']);
    });
  }

  async toggleLike() {
    this.route.params.subscribe(async params => {
      if (this.isLiked) {
        this.isLiked = !this.isLiked;
        // @ts-ignore
        await this._movieService.removeWatchList(params['id'], localStorage.getItem('id'))
      } else {
        this.isLiked = !this.isLiked;
        // @ts-ignore
        await this._movieService.addWatchList(params['id'], localStorage.getItem('id'))
      }
    });
  }
}
