import { Component, OnInit } from '@angular/core';
import jsonData from './data/about.json';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  abouts: any[] = jsonData.abouts
}
