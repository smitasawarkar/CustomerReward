import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-headerfooter',
  imports: [NavbarComponent],
  templateUrl: './headerfooter.component.html',
  styleUrl: './headerfooter.component.css'
})
export class HeaderfooterComponent {

}
