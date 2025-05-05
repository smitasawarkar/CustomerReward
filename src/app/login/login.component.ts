import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderfooterComponent } from "../headerfooter/headerfooter.component";

@Component({
  selector: 'app-login',
  imports: [HeaderfooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
