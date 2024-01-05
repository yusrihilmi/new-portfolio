import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, AboutComponent, WebProjectsComponent, FilterProjectsComponent,  RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-portfolio';
}
