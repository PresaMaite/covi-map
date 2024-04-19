import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() cardTitle = "Error";
  @Input() cardNumber: number | undefined | null = null;
  @Input() state: "big" | "small" = "big";
  @Input() color: "red" | "green" | "blue" | "orange" | "sky" | "brown" = "sky";
  @Input() icon = "/assets/logo/coronavirus.png";
  @Input() needFlag = false;

  // Colores para iconos e imagen del background
  readonly blue = "#3C38AD";
  readonly green = "#84C41A";
  readonly orange = "#FF6500";
  readonly red = "#FF060A";
  readonly sky = "#2F6DFF";
  readonly brown = "#B60201";

  // Color por defecto de los iconos y background
  selectedColor = this.sky;

  ngOnInit(): void {
    // Aplica el color
    this.selectedColor = this[this.color];
  }

}
