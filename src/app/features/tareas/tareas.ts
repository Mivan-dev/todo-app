import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TareasBd } from '../../shared/tareas-bd/tareas-bd';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, RouterModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.scss'
})
export class Tareas implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasBd: TareasBd) { }

  ngOnInit(): void {
    //Cargar tareas al iniciar el componente
    this.tareas = this.tareasBd.getTareas();
    //Para limpiar las tareas del localStorage
    //localStorage.clear();
  }

}
