import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { StarsBgComponent } from './components/stars-bg.componen';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, StarsBgComponent],
})
export class AppComponent {
  existingRouteUrl: any = null;

  constructor(private router: Router) {
    this.initializeWeb();
  }

  initializeWeb() {
    this.router.events.subscribe(async (val) => {
      if (val instanceof NavigationStart) {
        const urls = val.url.split('/').filter((u) => u.length);
        if (urls.length) {
          this.existingRouteUrl = val.url;
        }
      }
    });

    this._setDefaults();
  }

  private async _setDefaults() {
    if (this.existingRouteUrl) {
      await this._navigateTo(this.existingRouteUrl);
      return;
    }

    // await this._navigateTo('/home');
  }

  private async _navigateTo(path: string, args?: string, replaceUrl = false) {
    if (!args) {
      await this.router.navigate([path], { replaceUrl: replaceUrl });
    } else {
      await this.router.navigate([path, args], { replaceUrl: replaceUrl });
    }
  }
}
