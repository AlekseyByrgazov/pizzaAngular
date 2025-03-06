import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderFormService } from './order-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent {
  orderForm: FormGroup;
  showPopup: boolean = false;

  constructor(private fb: FormBuilder, private orderFormService: OrderFormService) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁё\s]+$/)]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]*$/)]]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderFormService.sendUserData(this.orderForm.value);
      this.showPopup = true;
      this.orderForm.reset();
    }
  }

  filterInput(event: KeyboardEvent) {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
