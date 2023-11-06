import { Component, Input } from '@angular/core';
import {TmdbService} from "../../service/tmdb.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() href: string | undefined;
  @Input() title: string | undefined;
  @Input() src: string | undefined;
  @Input() _id: number | undefined;
  @Input() vote_average: number | undefined;
  isLiked: boolean = false;

  constructor(_movieService: TmdbService) {
  }
}
