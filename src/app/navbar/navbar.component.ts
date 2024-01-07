import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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

