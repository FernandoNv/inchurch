import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <img
        class="app-logo"
        src="images/inchurch-logo.svg"
        alt="Inchurch Logo"
      />
      <router-outlet />
    </div>
  `,
  styles: `
    .app-container {
      @apply w-full h-dvh flex flex-col justify-center items-center;
      img.app-logo {
        @apply mb-4;
      }
    }
  `,
})
export class MainLayoutComponent {}
