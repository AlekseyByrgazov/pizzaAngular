import { Component, Input } from '@angular/core';
import { BaseItemCard } from '../../models/types';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent {
  @Input() content!: BaseItemCard;
  
  constructor() {}
 
}
