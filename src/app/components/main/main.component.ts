import { Component, OnInit } from '@angular/core';
import { DescriptionComponent } from "../description/description.component";
import { BaseItemCard, PizzaTitles, PizzaCard } from '../../models/types';
import { DescriptionService } from '../../services/description.service';
import { OrderFormComponent } from "../order-form/order-form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DescriptionComponent, OrderFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  titles!: PizzaTitles;
  contentForFormGroup!: string;
  contentForAdvantages!: BaseItemCard[];
  contentForPizzaCards!: PizzaCard[];

  constructor(private descriptionService: DescriptionService) {}

  ngOnInit(): void {
    this.titles = this.descriptionService.Titles;
    this.contentForFormGroup = this.descriptionService.contentFormGroup;
    this.contentForAdvantages = this.descriptionService.contentForAdvantages;
    this.contentForPizzaCards = this.descriptionService.contentForPizzaCards
  }
}
