import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Movie} from "../../model/Movie";
import {TmdbService} from "../../service/tmdb.service";
import {Person} from "../../model/Person";

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

  constructor(private _movieService: TmdbService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.movie = await this._movieService.getMovieById(params['id']);
      this.similarMovies = await this._movieService.getSimilarMovies(params['id']);
      this.movieCredits = await this._movieService.getMovieCredits(params['id']);
      this.images = await this._movieService.getMoviesImages(params['id']);
      console.log(this.movie);
      console.log(this.similarMovies);
      console.log(this.movieCredits);
      console.log(this.images);
    });
  }
}
