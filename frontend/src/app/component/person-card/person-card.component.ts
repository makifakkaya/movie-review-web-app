import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  @Input() href: string | undefined;
  @Input() title: string | undefined;
  @Input() src: string | undefined;
  @Input() vote_average: number | undefined;
}
