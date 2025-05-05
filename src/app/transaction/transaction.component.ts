import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Transaction } from '../interface/transaction';
import { error, log } from 'console';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderfooterComponent } from "../headerfooter/headerfooter.component";


@Component({
  selector: 'app-transaction',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterOutlet, HeaderfooterComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
   standalone: true
})
export class TransactionComponent {
rewardsPoint:any;
txn: any;
center: any;
selectedTxn:Transaction|undefined;
transaction: Transaction= new Transaction(0,0,0,"");
getTxn:any;
txndelt:any
allTransection:any;

customerId!:number
startDate!:string;
endDate!:string;

constructor(private transactionService:TransactionService){
  console.log("Transaction component call");
}

ngOnInit(){}



getAllTransactions(){
  return this.transactionService.getAllTxns(this.customerId,this.startDate,this.endDate,this.transaction).subscribe((data:any)=>{
    console.log(this.customerId);
    console.log(this.startDate);
    console.log(this.endDate);
    this.allTransection=data;
  })
}

addTransaction() {
  // alert("Call ts")
  return this.transactionService.addTransaction(this.transaction).subscribe((data:any)=>{
    this.getAllTransactions();
    this.resetForm();
  },error => console.log("Error occurred:", error)
  );
}

  selectTransaction(id: number) {
    this.transactionService.getSelectedTransaction(id).subscribe(
      (data: Transaction) => {
        console.log(data);
        this.selectedTxn = data;
        // this.transaction={id:0,customerId:0,amount:0,date:""};
      },
      error => console.log("Error occurred:", error)
    );
  }

  updateTransaction(id:number,updateTransaction:Transaction){
    this.transactionService.updateTransaction(id,updateTransaction).subscribe(data=>{
      console.log("transaction updated: ",data); 
      this.getAllTransactions();
      this.resetForm();
    },error=>{console.log("error occured",error);
    }
  );
  }
  
  onSubmittransaction(){
    if(this.selectedTxn && this.selectedTxn.id)
    {alert("update transaction")
    this.updateTransaction(this.selectedTxn.id, this.transaction);
   }else
    {
      alert("add transaction")
      this.addTransaction();
    }
  }

  public delTransaction(id:number){
    console.log("in success block");
     this.transactionService.deleteTransaction(id).subscribe((data:any)=>{ 
      console.log("transaction deleted successfully"); 
    },
    error =>{
      console.log("in error block",error);   
         this.getAllTransactions();     
  }
  )
  }

  resetForm(){
    this.transaction=new Transaction(0,0,0,"");
    this.selectedTxn=undefined;
  }
}
