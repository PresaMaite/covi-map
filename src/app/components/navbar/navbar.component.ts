import { Component } from '@angular/core';
import { NavButtons } from './navbar.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navButtons: NavButtons[] = [{
    icon: "./../../assets/icons/pie-chart.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/layout-three-columns.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/columns-gap.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/folder2.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/collection.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/graph-up-arrow.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/globe.svg",
    url: " ",
  }, {
    icon: "./../../assets/icons/chat-left.svg",
    url: " ",
  }]
}
