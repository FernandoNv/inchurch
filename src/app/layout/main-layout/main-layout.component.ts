import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../ui/header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <div class="app-container">
      <router-outlet />
    </div>
  `,
  styles: `
    .app-container {
      @apply container;
    }
  `,
})
export class MainLayoutComponent {}
