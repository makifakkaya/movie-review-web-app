import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() href: string | undefined;
  @Input() title: string | undefined;
  @Input() src: string | undefined;
  @Input() _id: number | undefined;
  @Input() vote_average: number | undefined;
  isLiked: boolean = false;

  constructor(private _movieService: MovieService) {}

  async ngOnInit() {
    if (this._id !== undefined) {
      // @ts-ignore
      this.isLiked = await this._movieService.isInWatchlist(this._id, localStorage.getItem('id'));
    }
  }

  async toggleLike() {

    if (this.isLiked) {
      this.isLiked = !this.isLiked;
      // @ts-ignore
      await this._movieService.removeWatchList(this._id, localStorage.getItem('id'))
    } else {
      this.isLiked = !this.isLiked;
      // @ts-ignore
      await this._movieService.addWatchList(this._id, localStorage.getItem('id'))
    }



  }
}
