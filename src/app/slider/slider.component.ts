import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/img/logo/itm-logo.png',
      thumbImage: 'assets/img/logo/itm-logo.png',
    },
    {
      image: 'assets/img/logo/tbp-logo.png',
      thumbImage: 'assets/img/logo/tbp-logo.png',
    },
    {
      image: 'assets/img/logo/greenchem-logo.png',
      thumbImage: 'assets/img/logo/greenchem-logo.png',
    },
    {
      image: 'assets/img/logo/rhapsodie-logo.png',
      thumbImage: 'assets/img/logo/rhapsodie-logo.png',
    },
    {
      image: 'assets/img/logo/tri-logo.png',
      thumbImage: 'assets/img/logo/tri-logo.png',
    },
    {
      image: 'assets/img/logo/at-logo.png',
      thumbImage: 'assets/img/logo/at-logo.png',
    },
    {
      image: 'assets/img/logo/gatsby-logo.png',
      thumbImage: 'assets/img/logo/gatsby-logo.png',
    },
    {
      image: 'assets/img/logo/toyota-logo.png',
      thumbImage: 'assets/img/logo/toyota-logo.png',
    },
    {
      image: 'assets/img/logo/mazda-logo.png',
      thumbImage: 'assets/img/logo/mazda-logo.png',
    },
    {
      image: 'assets/img/logo/xev-logo.png',
      thumbImage: 'assets/img/logo/xev-logo.png',
    },
    {
      image: 'assets/img/logo/tmmin-logo.png',
      thumbImage: 'assets/img/logo/tmmin-logo.png',
    },
  ];

  sliderConfig = {
    infinite: true,
    autoSlide: true,
    autoSlideInterval: 3000,
    imageSize: { width: 150, height: 150, space: 75 },
    imagePopup: false,
  };
}
