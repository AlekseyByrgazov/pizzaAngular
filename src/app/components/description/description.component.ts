import { Component, Input } from '@angular/core';
import { BlockOfAdvantage } from '../../models/types';
import { AdvantageComponent } from '../advantage/advantage.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [AdvantageComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})


export class DescriptionComponent {

  @Input() titles!: Array<string>;
  @Input() content!: string | BlockOfAdvantage[];

  constructor() {}

  isString(value: unknown) {
    return typeof value === 'string'
  }

}
