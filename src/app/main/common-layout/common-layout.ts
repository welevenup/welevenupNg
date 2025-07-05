import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-common-layout',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './common-layout.html',
  styleUrl: './common-layout.scss'
})
export class CommonLayout {

}
