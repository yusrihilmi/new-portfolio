import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-web-projects',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './web-projects.component.html',
  styleUrl: './web-projects.component.css'
})
export class WebProjectsComponent {

}
