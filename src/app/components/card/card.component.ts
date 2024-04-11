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

  @Input() cardTitle = "Título";
  @Input() cardNumber = 7736294;
  @Input() state: "big" | "small" = "small";
  @Input() color: "red" | "green" | "blue" | "orange" | "sky" | "brown" = "green";
  @Input() icon = "/assets/logo/coronavirus.png";

  blue = "#3C38AD";
  green = "#84C41A";
  orange = "#FF6500";
  red = "#FF060A";
  sky = "#2F6DFF";
  brown = "#B60201";

  selectedColor = this[this.color];

  ngOnInit(): void {
    this.selectedColor = this[this.color];
    
  }

}
