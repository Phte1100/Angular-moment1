import { Component } from '@angular/core';
import { CalcComponent } from '../calc/calc.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalcComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
}

