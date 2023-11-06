import { Component, Input } from '@angular/core';
import {TmdbService} from "../../service/tmdb.service";

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.css']
})
export class TvShowCardComponent {
  @Input() href: string | undefined;
  @Input() title: string | undefined;
  @Input() src: string | undefined;
  @Input() _id: number | undefined;
  @Input() vote_average: number | undefined;
  isLiked: boolean = false;

  constructor(_movieService: TmdbService) {
  }
}
