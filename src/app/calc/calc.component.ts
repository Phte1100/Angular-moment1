import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  celsius: number | null = null;
  fahrenheit: number | null = null;
  meter: number | null = null;
  feet: number | null = null;

  convertToFahrenheit(): number | null {
    return this.celsius !== null ? (this.celsius * 9 / 5) + 32 : null;
  }
  convertToCelsius(): number | null {
    return this.fahrenheit !== null ? parseFloat(((this.fahrenheit - 32) * 5 / 9).toFixed(1)) : null;
  }
  convertToFeet(): number | null {
    return this.meter !== null ? parseFloat(((this.meter * 3.28)).toFixed(1)) : null;
  }
  convertToMeter(): number | null {
    return this.feet !== null ? parseFloat((this.feet * 0.3048).toFixed(1)) : null;
  }

}
