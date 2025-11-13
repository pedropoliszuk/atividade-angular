import { Component, signal } from '@angular/core';
import { Inicial } from "./inicial/inicial";

@Component({
  selector: 'app-root',
  imports: [Inicial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade-angular');
}
