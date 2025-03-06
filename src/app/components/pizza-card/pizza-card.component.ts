import { Component, Input } from '@angular/core';
import { PizzaCard } from '../../models/types';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss'
})
export class PizzaCardComponent {
  
  @Input() content!: PizzaCard;
  selectedImageUrl: string | null = null;
  
  constructor() {}
  
  openImage(url: string) {
    this.selectedImageUrl = url;
  }

  closeImage() {
    this.selectedImageUrl = null;
  }
}
