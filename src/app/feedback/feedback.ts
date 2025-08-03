import { Component } from '@angular/core';
import { FeedbackSerive } from './feedback-serive';
import { Customer } from './customer.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone:true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback {
    customerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private feedback:FeedbackSerive){
      this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      nationality: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      doorNo: ['', Validators.required],
      street: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required]
    });
    }

  onSubmit() {
  if (this.customerForm.valid) {
    const customerData : Customer = {
      firstName: this.customerForm.value.firstName,
      lastName: this.customerForm.value.lastName,
      age: this.customerForm.value.age,
      nationality: this.customerForm.value.nationality,
      gender: this.customerForm.value.gender,
      email: this.customerForm.value.email,
      mobileNo: this.customerForm.value.mobileNo,
      address: {
        doorNo: this.customerForm.value.doorNo,
        street: this.customerForm.value.street,
        city: this.customerForm.value.city,
        state: this.customerForm.value.state,
        country: this.customerForm.value.country
      },
      message: this.customerForm.value.message
    };

    this.feedback.createCustomer(customerData).subscribe({
      next: response => {
        console.log('Success:', response);
        alert('Feedback submitted successfully!');
        this.customerForm.reset();
      },
      error: err => {
        console.error('Error:', err);
        alert('Failed to submit feedback.');
        }
      });
    }
  }
}
