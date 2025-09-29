import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../toast-service/toast-service';
import { ToastInfo } from '../entities';

@Component({
  selector: 'app-toast-comp',
  imports: [CommonModule, NgbToastModule],
  templateUrl: './toast-comp.html',
  styleUrl: './toast-comp.scss'
})
export class ToastComp {
  constructor(public toastService: ToastService) {
    // Debug: Agregar un toast de prueba
    // setTimeout(() => {
    //   this.toastService.showSuccess('Toast de prueba');
    // }, 2000);
  }
}
