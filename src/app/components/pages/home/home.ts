import { Component } from '@angular/core';
import { Landing } from "../../sub-components/landing/landing";
import { WhatWeDo } from "../../sub-components/what-we-do/what-we-do";
import { HomeServices } from "../../sub-components/home-services/home-services";
import { Faqs } from "../../sub-components/faqs/faqs";

@Component({
  selector: 'app-home',
  imports: [Landing, WhatWeDo, HomeServices, Faqs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
