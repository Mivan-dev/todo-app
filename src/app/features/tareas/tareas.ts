import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TareasBd } from '../../shared/tareas-bd/tareas-bd';
import { ToastService } from '../../shared/toast-service/toast-service';
import { EditarTarea } from '../editar-tarea/editar-tarea';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, RouterModule, EditarTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.scss'
})
export class Tareas implements OnInit {
  tareas: Tarea[] = [];

  constructor(
    private tareasBd: TareasBd,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    //Cargar tareas al iniciar el componente
    this.tareas = this.tareasBd.getTareas();
    this.tareasBd.tareasActualizadas.subscribe(tareas => {
    this.tareas = tareas;
    });

    // Para limpiar las tareas del localStorage
    // localStorage.clear();
  }

  deleteTarea(id: string): void{
    this.tareasBd.deleteTarea(id);
    this.toastService.showSuccess('Tarea eliminada con éxito', 'Éxito');
    // Actualizar la lista de tareas después de eliminar una
    this.tareas = this.tareasBd.getTareas();
  }

}
