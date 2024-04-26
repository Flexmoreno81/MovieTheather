import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'MovieTheather';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showNavbar = !event.urlAfterRedirects.includes('not-found');
    });
  }

  shouldShowNavbar(): boolean {
    return this.showNavbar;
  }

}
