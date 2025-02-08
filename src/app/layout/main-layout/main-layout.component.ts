import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../ui/menu/menu.component';
import { HeaderComponent } from '../../ui/header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MenuComponent, HeaderComponent],
  template: `
    <app-menu class="app-menu" />
    <main class="app-container">
      <app-header />
      <router-outlet />
      <footer class="app-footer">
        <small class="block">inChurch - Fernando Vieira</small>
      </footer>
    </main>
  `,
  styles: `
    :host {
      @apply w-full h-full flex flex-row container m-auto p-4 md:gap-2;

      .app-container {
        @apply m-auto w-full h-full;
        min-height: calc(100dvh - 126px); // didplay - header - footer
      }

      .app-footer {
        @apply flex justify-center bg-white p-4 rounded-md mt-4;
      }
    }
  `,
})
export class MainLayoutComponent {}
