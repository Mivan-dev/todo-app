import { Injectable } from '@angular/core';
import { Tarea } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class TareasBd {
  private readonly STORAGE_KEY = 'tareas';

  //obtener tareas
  getTareas(): Tarea[] {
    const tareasData = localStorage.getItem(this.STORAGE_KEY);
    if (!tareasData) {
      // Si no hay datos en el almacenamiento, inicializamos con ejemplos
      const tareasIniciales: Tarea[] = [
        { id: '1', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', title: 'Aprender Angular', description: 'Nivel inicial', completed: false },
        { id: '2', image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', title: 'Aprender TypeScript', description: 'Fundamentos de tipado', completed: true },
        { id: '3', image: 'https://miro.medium.com/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg', title: 'Aprender Nest.JS', description: 'Buen Back para Angular', completed: false }
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
  }
}
