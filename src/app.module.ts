
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './app/transaction/transaction.component';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';
import { TransactionService } from './app/service/transaction.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistretionComponent } from './app/registretion/registretion.component';
import { RewardPointComponent } from './app/reward-point/reward-point.component';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { NotfoundComponent } from './app/notfound/notfound.component';
import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderfooterComponent } from './app/headerfooter/headerfooter.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TransactionComponent,
    RegistretionComponent,
    RewardPointComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    HeaderfooterComponent,
  ],
  providers: [TransactionService],
  bootstrap: []
})
export class AppModule { }
