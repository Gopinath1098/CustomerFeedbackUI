import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackSerive {

  private postApiUrl = "http://localhost:9000/addCustomer";
    
  constructor(private httpClient:HttpClient){}

  createCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.postApiUrl,customer);
  }

}
