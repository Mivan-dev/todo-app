import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TareasBd } from '../../shared/tareas-bd/tareas-bd';
import { ToastService } from '../../shared/toast-service/toast-service';
import { Tarea } from '../../shared/entities';

@Component({
  selector: 'app-editar-tarea',
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  templateUrl: './editar-tarea.html',
  styleUrl: './editar-tarea.scss'
})
export class EditarTarea {
  @ViewChild('content') private content!: TemplateRef<any>;
  editForm: FormGroup;
  private currentTarea?: Tarea;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private tareasBd: TareasBd,
    private toastService: ToastService
  ) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['']
    });
  }

  // llamado desde el componente padre: editarTareaComp.abrirModal(id)
  abrirModal(id: string) {
    const tarea = this.tareasBd.getTareaById(id);
    if (!tarea) {
      this.toastService.showError('Tarea no encontrada');
      return;
    }
    this.currentTarea = tarea;
    this.editForm.patchValue({
      title: tarea.title,
      description: tarea.description,
      image: tarea.image || ''
    });
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
  }

  // acción del botón guardar en el modal
  saveChanges() {
    if (!this.currentTarea) return;
    if (this.editForm.invalid) {
      Object.values(this.editForm.controls).forEach(c => c.markAsTouched());
      return;
    }
    const updated: Tarea = {
      ...this.currentTarea,
      title: this.editForm.value.title,
      description: this.editForm.value.description,
      image: this.editForm.value.image || ''
    };
    this.tareasBd.editTarea(updated);
    this.toastService.showSuccess('Tarea actualizada correctamente');
    this.modalService.dismissAll();
  }
}
