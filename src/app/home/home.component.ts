import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightService } from '../shared/highlight.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fix the property name here
})
export class HomeComponent {
  constructor(private highlightService: HighlightService) {}

  onSocialMediaClick() {
    this.highlightService.triggerHighlight();
  }
}
