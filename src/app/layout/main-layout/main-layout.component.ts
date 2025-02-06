import { Component } from '@angular/core';
import { MenuComponent } from '../../ui/menu/menu.component';
import { HeaderComponent } from '../../ui/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [MenuComponent, HeaderComponent, RouterOutlet],
  template: `
    <app-menu class="app-menu" />
    <div class="app-container">
      <app-header />
      <router-outlet />
      <footer>inChurch - Fernando Vieira</footer>
    </div>
  `,
  styles: `
    :host {
      @apply w-full h-full flex flex-row container m-auto p-4;

      .app-menu {
        @apply px-4;
      }

      .app-container {
        @apply m-auto flex flex-col w-full;
        height: calc(100dvh - 112px); // didplay - header - footer
      }
    }
  `,
})
export class MainLayoutComponent {}
