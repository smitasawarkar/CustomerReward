import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { customer } from '../interface/customer';
import { HeaderfooterComponent } from "../headerfooter/headerfooter.component";


@Component({
  selector: 'app-registretion',
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet, HeaderfooterComponent],
  templateUrl: './registretion.component.html',
  styleUrl: './registretion.component.css'
})
export class RegistretionComponent {

  constructor(private service:TransactionService) { }
  message:any;

  ngOnInit() {
  }
  
customer: customer=new customer("","","");

public registerNow(){
let resp=this.service.doRegistration(this.customer);
resp.subscribe((data:any)=>this.message=data);
this.resetForm()
  }
  resetForm(){
    this.customer=new customer("","","");
    this.message=undefined;
  }
}

