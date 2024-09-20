import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YusriPortfolio';
  loading = false;  // Controls the display of the loading screen

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    // Listen to routing events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoadingScreen();  // Show loading screen on route start
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.hideLoadingScreen();  // Hide loading screen on route end
      }
    });
  }

  showLoadingScreen() {
    this.loading = true;
    // Ensure loading screen stays for at least 2 seconds
    timer(500).subscribe(() => {
      this.loading = false;
    });
  }

  hideLoadingScreen() {
    // Hide the loading screen after the 2-second delay
    timer(500).subscribe(() => {
      this.loading = false;
    });
  }
}
