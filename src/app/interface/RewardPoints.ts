import { stringify } from "querystring"
export class RewardPoints{
    customerId!: number;
     month!:number;
     year!:number;
     points!:number;
     constructor(customerId: number,month:number,year:number,points:number){}
}
