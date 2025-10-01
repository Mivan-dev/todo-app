import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgregarTarea } from '../../features/agregar-tarea/agregar-tarea';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, AgregarTarea],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  constructor() { }

}
