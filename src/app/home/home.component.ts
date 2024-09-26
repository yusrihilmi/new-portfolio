import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightService } from '../shared/highlight.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // Reference to the video element
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  constructor(private highlightService: HighlightService) {}

  ngAfterViewInit(): void {
    const videoElement = this.backgroundVideo.nativeElement;
    videoElement.muted = true;
    videoElement.play().catch(err => {
      console.error('Autoplay failed:', err);
    });
  }

  onSocialMediaClick() {
    this.highlightService.triggerHighlight();
  }
}
