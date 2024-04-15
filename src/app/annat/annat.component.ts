import { Component } from '@angular/core';

@Component({
  selector: 'app-annat',
  standalone: true,
  imports: [],
  templateUrl: './annat.component.html',
  styleUrl: './annat.component.css'
})
export class AnnatComponent {

  tool: string ="Sax";

  tools: string[] = ["Sax", "Träklubba", "Kniv?", "plåtsax?"]; //Array som används för data binding

  toolsImage: string = "assets/images/slide5-1.jpg"; //Bild som används för data binding

}
