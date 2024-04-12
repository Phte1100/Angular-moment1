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

  convertToFahrenheit(): number | null {
    // Endast konvertera om det finns ett giltigt värde
    return this.celsius !== null ? (this.celsius * 9 / 5) + 32 : null;
  }
}

