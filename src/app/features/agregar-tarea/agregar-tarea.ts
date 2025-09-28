import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tarea } from '../../shared/entities';
import { TareasBd } from '../../shared/tareas-bd/tareas-bd';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    private fb: FormBuilder) {
      this.tareaForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        image: ['', [Validators.required]],
        completed: [false]
      })
    }
	//TODO: cambiar el any por el tipo de dato que corresponda
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
        console.log('Intentando abrir modal');
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
        console.log('Intentando abrir modal');
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
        id: Date.now().toString(), // Genera un ID único basado en timestamp IMPORTANTE
        title: this.tareaForm.value.title,
        description: this.tareaForm.value.description,
        image: this.tareaForm.value.image,
        completed: false
      };
      // Mensaje debajo del boton de add +, TODO: cambiar por un toast
      this.tareasBd.addTarea(nuevaTarea);
      this.modalService.dismissAll('Tarea guardada correctamente 👍');
      this.tareaForm.reset();
    } else {
      // Marcar todos los campos como tocados para mostrar errores de validación
      Object.keys(this.tareaForm.controls).forEach(key => {
        this.tareaForm.get(key)?.markAsTouched();
      });
    }
}
}