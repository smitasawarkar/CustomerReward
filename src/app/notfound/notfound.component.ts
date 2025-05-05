import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderfooterComponent } from "../headerfooter/headerfooter.component";

@Component({
  selector: 'app-notfound',
  imports: [RouterLink, HeaderfooterComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
