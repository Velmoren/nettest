import { Component, Input } from '@angular/core';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() film!: Film
}
