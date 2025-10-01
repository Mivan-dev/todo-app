import { EventEmitter, Injectable } from '@angular/core';
import { Tarea } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class TareasBd {
  private readonly STORAGE_KEY = 'tareas';
  // TODO: Implementar subscribers para notificar cambios en las tareas (BehaviorSubject)
  tareasActualizadas = new EventEmitter<Tarea[]>();

  //obtener tareas
  getTareas(): Tarea[] {
    const tareasData = localStorage.getItem(this.STORAGE_KEY);
    if (!tareasData) {
      // Si no hay datos en el almacenamiento, inicializamos con ejemplos
      const tareasIniciales: Tarea[] = [
        { id: '1', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Aprender Angular', description: 'Nivel inicial', completed: false },
        { id: '2', image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', title: 'Aprender TypeScript', description: 'Fundamentos de tipado fuerte.', completed: true },
        { id: '3', image: 'https://miro.medium.com/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg', title: 'Aprender Nest.JS', description: 'Nest JS es un framework de Node.js para backend. Muy bueno para combinar con Angular ya que comparten el mismo criterio y escalabilidad.', completed: false }
      ];
      this.saveTareas(tareasIniciales);
      return tareasIniciales
  }
  return JSON.parse(tareasData);
}
  //guardar tareas
  saveTareas(tareas: Tarea[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tareas));
  }

  //obtener tarea por id
  getTareaById(id: string): Tarea | undefined {
    return this.getTareas().find(tarea => tarea.id === id);
  }

  // agregar tarea
   addTarea(tarea: Tarea): void {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tareas));
    this.tareasActualizadas.emit(tareas);
  }

  //editar tarea
  editTarea(tareaEditada: Tarea): void {
    const tareas = this.getTareas().map(tarea =>
      tarea.id === tareaEditada.id ? tareaEditada : tarea
    );
    this.saveTareas(tareas);
    this.tareasActualizadas.emit(tareas);
  }

  //eliminar tarea: Crea un array nuevo sin la tarea que se quiere eliminar y lo guarda
  //TODO: agregar toast de tarea eliminada
  deleteTarea(id: string): void{
    const tareas = this.getTareas().filter(tarea => tarea.id !== id);
    this.saveTareas(tareas);
  }
}
