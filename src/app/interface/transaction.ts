import { stringify } from "querystring"
export class Transaction{
    id!:number;
    customerId!: number;
    amount!: number;
    date!: string;
        constructor(
            id:number,
            customerId: number,
            amount: number,
            date:string){
            
        }
    }