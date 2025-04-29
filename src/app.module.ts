
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
  ],
  providers: [TransactionService],
  bootstrap: []
})
export class AppModule { }
