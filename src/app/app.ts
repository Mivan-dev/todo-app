import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './layout/toolbar/toolbar';
import { Footer } from "./layout/footer/footer";
import { Tareas } from "./features/tareas/tareas";
import { AgregarTarea } from "./features/agregar-tarea/agregar-tarea";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Footer, Tareas, AgregarTarea],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo-app';
}
