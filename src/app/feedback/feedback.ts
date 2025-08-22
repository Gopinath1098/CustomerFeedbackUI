import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FeedbackSerive } from './feedback-serive';
import { Customer } from './customer.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { Country, CountryStateCityMap, } from './location';
import { countryStateCityMap } from './location';


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
    sucess:string ="";
    cities!: string[];
    states!: string[];
  constructor(private fb: FormBuilder,
    private feedback:FeedbackSerive,
    private cdr: ChangeDetectorRef,private zone:NgZone){
      this.customerForm = this.fb.group({
      firstName: ['Gopinath', Validators.required],
      lastName: ['S', Validators.required],
      age: [26, [Validators.required, Validators.min(1)]],
      nationality: ['Indian', Validators.required],
      gender: ['Male', Validators.required],
      email: ['smartgopi2917@gmail.com', [Validators.required, Validators.email]],
      mobileNo: ['8072982773',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
      doorNo: ['11/22', Validators.required],
      street: ['Varadharajapuram'],
      city: ['Tirunelveli', Validators.required],
      state: ['Tamilnadu', Validators.required],
      country: ['India', Validators.required],
      message: ['Thanks for feedback', Validators.required]
    });
    }

  onSubmit() {
    console.log(this.customerForm);
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
    this.sucess="";
    this.feedback.createCustomer(customerData).pipe(
      finalize(()=>{
        setTimeout(() => {
          this.sucess = '';
          this.cdr.detectChanges();
        }, 3000)

        this.cdr.detectChanges()
      })
    ).subscribe({
      next: response => {
        console.log('Success:', response);
           this.sucess=response.message;
        alert("Feedback submitted successfully!");
        this.customerForm.reset();
      },
      error: err => {
        console.error('Error:', err);
        this.sucess=err.error?.errorMessage;
        alert("InValid Form Details");
         this.customerForm.reset();
        }
      });
    } else if(this.sucess){
      this.sucess = "**please enter all details";
    }
  }
  onCountryChange(country: string) {
    const typedCountry = country as Country;
    this.states = Object.keys(countryStateCityMap[typedCountry] || {});
    this.customerForm.patchValue({ state: '', city: '' });
    this.cities = [];
  }

  onStateChange(state: string) {
  const typedCountry = this.customerForm.value.country as keyof typeof countryStateCityMap;
  const stateMap = countryStateCityMap[typedCountry];

  const typedState = state as keyof typeof stateMap;

  this.cities = stateMap[typedState] || [];
  this.customerForm.patchValue({ city: '' });
}

  getCountryList(): string[] {
  return Object.keys(countryStateCityMap);
  }


}
