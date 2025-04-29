import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { customer } from '../customer';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-registretion',
  imports: [ReactiveFormsModule,FormsModule,RouterOutlet,HomeComponent],
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

