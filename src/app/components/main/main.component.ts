import { Component, OnInit } from '@angular/core';
import { DescriptionComponent } from "../description/description.component";
import { BlockOfAdvantage, PizzaTitles } from '../../models/types';
import { DescriptionService } from '../../services/description.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DescriptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  titles!: PizzaTitles;
  contentForFormGroup!: string;
  contentForAdvantages!: BlockOfAdvantage[];

  constructor(private descriptionService: DescriptionService) {}

  ngOnInit(): void {
    this.titles = this.descriptionService.Titles
    this.contentForFormGroup = this.descriptionService.contentFormGroup
    this.contentForAdvantages = this.descriptionService.contentForAdvantages
  }
}
