import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS } from '../menu';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-side-bar.component.html',
  styleUrl: './menu-side-bar.component.scss',
})
export class MenuSideBarComponent {
  protected items: MenuItem[] = MENU_ITEMS;
}
