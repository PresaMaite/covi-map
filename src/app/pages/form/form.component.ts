import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern(/^[a-zA-Z\s]*$/) ]],
    lastName: ['', [Validators.minLength(2), Validators.maxLength(40), Validators.pattern(/^[a-zA-Z\s]*$/)] ],
    email: ['', [Validators.required, Validators.email]],
    reason: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(400)] ],
  })

  isModalOpen = false;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(event: any) {
    console.log(this.form.status);
    this.showModal();
    this.form.reset();

    this.form.get('reason')?.setValue('');
  }

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
