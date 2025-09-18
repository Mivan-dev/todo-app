import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './layout/toolbar/toolbar';
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo-app';
}
