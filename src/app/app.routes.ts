import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"register",loadComponent:()=>import('./registretion/registretion.component').then((c)=>c.RegistretionComponent)},
    {path:"transaction" ,loadComponent:()=>import('./transaction/transaction.component').then((c)=>c.TransactionComponent),canActivate:[authGuardGuard]},
    {path:"rewards",loadComponent:()=>import('./reward-point/reward-point.component').then((c)=>c.RewardPointComponent), canActivate:[authGuardGuard]},
    {path:'login', loadComponent:()=> import('./login/login.component').then((c)=>c.LoginComponent),canActivate:[authGuardGuard]},
    {path:'forgotpass',loadComponent:()=>import('./forgot-password/forgot-password.component').then((c)=>c.ForgotPasswordComponent),canActivate:[authGuardGuard]},
    {path:'**',component:NotfoundComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
