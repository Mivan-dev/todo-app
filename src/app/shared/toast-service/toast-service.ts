import { Injectable } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastInfo } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: ToastInfo[] = [];

  // Mostrar toast con mensaje de éxito (verde)
  showSuccess(body: string, header: string = 'Éxito'): void {
    this.show(body, header, 'bg-success text-light');
  }

  // Mostrar toast con mensaje de error (rojo)
  showError(body: string, header: string = 'Error'): void {
    this.show(body, header, 'bg-danger text-light');
  }

  // Mostrar toast con mensaje de advertencia (amarillo)
  showWarning(body: string, header: string = 'Advertencia'): void {
    this.show(body, header, 'bg-warning');
  }

  // Método principal para mostrar toast
  show(body: string, header: string = '', classname?: string): void {
    this.toasts.push({ 
      header, 
      body, 
      classname,
      delay: 3000 // 3 segundos por defecto
    });
  }

  // Remover toast específico
  remove(toast: ToastInfo): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  // // Limpiar todos los toasts
  // clear(): void {
  //   this.toasts = [];
  // }
  
}
