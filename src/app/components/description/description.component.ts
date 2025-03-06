import { Component, Input } from '@angular/core';
import { ItemCard, PizzaCard } from '../../models/types';
import { AdvantageComponent } from '../advantage/advantage.component';
import { PizzaCardComponent } from '../pizza-card/pizza-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule,AdvantageComponent, PizzaCardComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})


export class DescriptionComponent {

  @Input() titles!: Array<string>;
  @Input() content!: string | ItemCard[];

  constructor() {}

  isString(value: unknown) {
    return typeof value === 'string'
  }

  isPizzaCard(card: ItemCard): card is PizzaCard  {
    return (card as PizzaCard).ButtonTittle !== undefined
  }

  isBaseItemCardArray(): boolean {
    return Array.isArray(this.content) && this.isPizzaCard(this.content[0]);
  }
}
