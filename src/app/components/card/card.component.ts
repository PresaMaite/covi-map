import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() state: "big" | "small" = "small";

  getBackgroundImage(): string {
    return this.state === "big" ? "bg-[url('/assets/logo/coronavirus.png')]" : '';
  }

}
