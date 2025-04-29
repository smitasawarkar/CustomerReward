import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegistretionComponent } from './registretion/registretion.component';
import { RewardPointComponent } from './reward-point/reward-point.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'CustomerReward';
}
