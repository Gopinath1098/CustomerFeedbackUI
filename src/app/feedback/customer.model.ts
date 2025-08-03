import { Address } from "./address.model";

export interface Customer {
    age:number;
    email:string;
    firstName:string;
    lastName:string;
    gender:string;
    mobileNo:string;
    nationality:string;
    address:Address;
    message:string;
}
