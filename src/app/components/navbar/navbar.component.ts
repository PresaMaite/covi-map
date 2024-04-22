import { Component } from '@angular/core';
import { NavButtons } from './navbar.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navButtons: NavButtons[] = [ {
    icon: "./../../assets/icons/globe.svg",
    url: "/dashboard",
  },{
    icon: "./../../assets/icons/collection.svg",
    url: "/top10",
  }, {
    icon: "./../../assets/icons/chat-left.svg",
    url: "/form",
  }]
}



// Por ahora no están activos los siguientes botones 

// {
//   icon: "./../../assets/icons/pie-chart.svg",
//   url: " ",
// }, {
//   icon: "./../../assets/icons/layout-three-columns.svg",
//   url: " ",
// }, {
//   icon: "./../../assets/icons/columns-gap.svg",
//   url: " ",
// }, {
//   icon: "./../../assets/icons/folder2.svg",
//   url: " ",
// }, {
//   icon: "./../../assets/icons/graph-up-arrow.svg",
//   url: " ",
// }
