import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../service/transaction.service';
import { RewardPoints } from '../interface/RewardPoints';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reward-point',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HomeComponent,RouterOutlet],
  templateUrl: './reward-point.component.html',
  styleUrl: './reward-point.component.css'
})
export class RewardPointComponent {

rewards : RewardPoints = new RewardPoints(0, 0, 0, 0);
getReward:any;
customerId!:number;
startDate!:string;
endDate!:string;
rewardsPoint:any;
allTxnDetails:any[]=[];
rwdPoints: any[]=[];
customerData:any={};
  constructor(private transactionService:TransactionService){
    console.log("Rward Points component call");
  }


  calculateRewards(){
    return this.transactionService.calculateRewards(this.customerId,this.startDate,this.endDate,this.rewards).subscribe((data:any)=>{
      console.log("calculate rewards");
      this.getReward=data;
      console.log(this.getReward);
      this.getTransactionRewards(this.getReward.customerId)
     this.getAllCustomerTxnDetails()
      this.resetForm()
    },
    error => {
      console.error("Error:", error);}
    );
  }

  getTransactionRewards(customerId:number){
     this.transactionService.getTransactionRewards(this.customerId).subscribe((data:any)=>{
    console.log(data);
    this.rewardsPoint=data;
  })
}

getAllCustomerTxnDetails(){
  this.transactionService.getAllCustomerTxnDetails(this.customerId,this.startDate,this.endDate).subscribe((data:any)=>{
    this.allTxnDetails=data.transactions || [];
    this.rwdPoints=data.rewardPoints || [];
    this.customerData=data.customer || [];
   
  })
}
  resetForm(){
    this.rewardsPoint=new RewardPoints(0,0,0,0);
  
  }
}
