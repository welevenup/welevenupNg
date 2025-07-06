import { Component } from '@angular/core';
import cardsjson from './cards.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-services',
  imports: [CommonModule],
  templateUrl: './home-services.html',
  styleUrl: './home-services.scss'
})
export class HomeServices {
  cards = cardsjson


}
