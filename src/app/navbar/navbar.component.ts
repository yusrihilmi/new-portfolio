import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HighlightService } from '../shared/highlight.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isBlinking = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 20; // Adjust the scroll threshold as needed
  }

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {
    this.highlightService.highlight$.subscribe(() => {
      this.triggerBlinkAnimation();
    });
  }

  triggerBlinkAnimation() {
    this.isBlinking = true;
    setTimeout(() => {
      this.isBlinking = false;
    }, 3000); // Animation lasts 3 seconds
  }

  // constructor() {
  //  }

  // ngOnInit(): void {
  //   window.addEventListener('scroll', this.scroll, true)
  // }

  // scroll = (): void => {

  //  let scrollHeigth;

  //  if(window.innerWidth < 350){
  //   scrollHeigth = 50;
  //  }else{
  //    scrollHeigth = 50;
  //  }

  //   if(window.scrollY >= scrollHeigth){
  //     document.body.style.setProperty('--navbar-scroll', "white");
  //     document.body.style.setProperty('--navbar-scroll-text', "black");
  //     document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 6px -5px grey");
  //   }else if(window.scrollY < scrollHeigth){
      
  //     document.body.style.setProperty('--navbar-scroll', "white");
  //     document.body.style.setProperty('--navbar-scroll-text', "black");
  //     document.body.style.setProperty('--navbar-scroll-shadow', "0px 0px 0px 0px grey");
  //   }
  // }

}

