import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './layout/toolbar/toolbar';
import { Footer } from "./layout/footer/footer";
import { Tareas } from "./features/tareas/tareas";
import { AgregarTarea } from "./features/agregar-tarea/agregar-tarea";
import { ToastComp } from './shared/toast-comp/toast-comp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Toolbar, Footer, Tareas, AgregarTarea, ToastComp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo-app';
}
