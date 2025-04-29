import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"register",loadComponent:()=>import('./registretion/registretion.component').then((c)=>c.RegistretionComponent)},
    {path:"transaction" ,loadComponent:()=>import('./transaction/transaction.component').then((c)=>c.TransactionComponent)},
    {path:"rewards",loadComponent:()=>import('./reward-point/reward-point.component').then((c)=>c.RewardPointComponent)},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
