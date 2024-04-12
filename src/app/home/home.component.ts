import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  celsius: number | null = null; // sätter initialt värde till null
  fahrenheit: number | null = null; // sätter initialt värde till null
  meter: number | null = null; // sätter initialt värde till null
  feet: number | null = null; // sätter initialt värde till null

  convertToFahrenheit(): number | null {
    // Endast konvertera om det finns ett giltigt värde
    return this.celsius !== null ? (this.celsius * 9 / 5) + 32 : null;
  }
  convertToCelsius(): number | null {
    // Endast konvertera om det finns ett giltigt värde
    // Endast 1 decimal
    return this.fahrenheit !== null ? parseFloat(((this.fahrenheit - 32) * 5 / 9).toFixed(1)) : null;
  }
  convertToFeet(): number | null {
    return this.meter !== null ? parseFloat(((this.meter * 3.28)).toFixed(1)) : null;
  }
  convertToMeter(): number | null {
    return this.feet !== null ? parseFloat((this.feet * 0.3048).toFixed(1)) : null;
  }
}

