import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { timer } from 'rxjs';

declare let gtag: Function; // ✅ Declare gtag to avoid TS error

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YusriPortfolio';
  loading = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.router.events.subscribe((event) => {
      // Loading screen logic
      if (event instanceof NavigationStart) {
        this.showLoadingScreen();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.hideLoadingScreen();

        // ✅ Track GA page views only in browser
        if (isPlatformBrowser(this.platformId) && typeof gtag === 'function' && event instanceof NavigationEnd) {
          gtag('config', 'G-T4XXQ8DSRY', {
            page_path: event.urlAfterRedirects,
          });
        }
      }
    });
  }

  showLoadingScreen() {
    this.loading = true;
    timer(500).subscribe(() => {
      this.loading = false;
    });
  }

  hideLoadingScreen() {
    timer(500).subscribe(() => {
      this.loading = false;
    });
  }
}
