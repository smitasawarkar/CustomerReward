import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../customer';
import { Observable } from 'rxjs';
import { Transaction } from '../interface/transaction';
import { RewardPoints} from '../interface/RewardPoints';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { 
    console.log("Transaction service is call");
  }
  
  public doRegistration(customer: customer){
    return this.http.post("http://localhost:8080/customers/register",customer,{responseType:'text' as 'json'});
  }

  public addTransaction(transaction:Transaction){
    // alert("Call service")
  return this.http.post("http://localhost:8080/transactions",transaction);
  }

  getAllTxns(customerId: number, startDate: string, endDate: string, transaction: Transaction){
    const txnUrl=`http://localhost:8080/transactions/getAllTransactions?customerId=${transaction.customerId}&startDate=${transaction.date}&endDate=${transaction.date}`;
    console.log("url",txnUrl)
    return this.http.get(txnUrl);

  }

getSelectedTransaction(id:number):Observable<Transaction>
{
  return this.http.get<Transaction>("http://localhost:8080/transactions/getTxnByTxnId/"+id);
}

updateTransaction(id:number,transaction:Transaction):Observable<Transaction>{
  return this.http.put<Transaction>('http://localhost:8080/transactions/update/'+id,transaction);
}

deleteTransaction(id:number){
  return this.http.delete("http://localhost:8080/transactions/delete/"+id);
  }
  
getAllCustomerTxnDetails(customerId: number, startDate: string, endDate: string){
  const txnDetailUrl=`http://localhost:8080/rewards/getCustomerTransactionRewardPointDetail?customerId=${customerId}&startDate=${startDate}&endDate=${endDate}`
  return this.http.get(txnDetailUrl);

}
calculateRewards(customerId: number, startDate: string, endDate: string, rewardPoints: RewardPoints) {
  const url = `http://localhost:8080/rewards/calculate?customerId=${customerId}&startDate=${startDate}&endDate=${endDate}`;
  return this.http.post(url, rewardPoints);
}

getTransactionRewards(customerId: number)
  {
    const rewardUrl=  `http://localhost:8080/rewards/getReward/${customerId}`
    return this.http.get(rewardUrl);
  }
}
