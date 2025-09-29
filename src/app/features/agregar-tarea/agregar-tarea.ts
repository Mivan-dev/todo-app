import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tarea } from '../../shared/entities';
import { TareasBd } from '../../shared/tareas-bd/tareas-bd';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../shared/toast-service/toast-service';

@Component({
	selector: 'app-agregar-tarea',
	imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbModule],
	templateUrl: './agregar-tarea.html',
   styleUrl: './agregar-tarea.scss'
})
export class AgregarTarea {
  tareaForm: FormGroup;

	private modalService = inject(NgbModal);
	closeResult = signal('');
  
  constructor(
    private tareasBd: TareasBd,
    private toastService: ToastService,
    private fb: FormBuilder) {
      this.tareaForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        image: [''],
        completed: [false]
      })
    }
  open(content: TemplateRef<NgbModal>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  // Guardar tarea
   guardarTarea() {
    if (this.tareaForm.valid) {
      const nuevaTarea: Tarea = {
        id: Date.now().toString(),
        title: this.tareaForm.value.title,
        description: this.tareaForm.value.description,
        image: this.tareaForm.value.image || '',
        completed: false
      };
      
      // Agregar la tarea a la BD
      this.tareasBd.addTarea(nuevaTarea);
      
      // Mostrar toast SOLO si se guardó correctamente
      this.toastService.showSuccess('Tarea agregada correctamente');
      
      // Cerrar modal
      this.modalService.dismissAll();
      
      // Reiniciar formulario
      this.tareaForm.reset();
    } else {
      // Marcar todos los campos como tocados para mostrar errores de validación
      Object.keys(this.tareaForm.controls).forEach(key => {
        this.tareaForm.get(key)?.markAsTouched();
      });
      
      // Opcional: mostrar toast de error
      this.toastService.showError('Por favor completa todos los campos requeridos');
    }
  }
}