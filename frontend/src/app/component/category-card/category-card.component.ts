import { Component, Input } from '@angular/core';
import {TmdbService} from "../../service/tmdb.service";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() href: string | undefined;
  @Input() title: string | undefined;
  @Input() src: string | undefined;

  constructor(_movieService: TmdbService) {
  }
}
