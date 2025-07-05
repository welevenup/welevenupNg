import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonLayout } from "./main/common-layout/common-layout";

@Component({
  selector: 'app-root',
  imports: [ CommonLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'welevenup';
}
