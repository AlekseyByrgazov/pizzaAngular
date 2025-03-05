import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  navigationItems: Array<string> = ['Пиццы', 'Напитки','Доставка и оплата','Контакты']
  logoSrc: string = './assets/img/logo.png';
constructor() {}
}
