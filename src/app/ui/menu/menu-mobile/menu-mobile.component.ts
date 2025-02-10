import { Component, computed, input, output } from '@angular/core';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { MENU_ITEMS } from '../menu';
import { IUser } from '../../../core/auth/auth.service';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-menu-mobile',
  imports: [Menu, Button],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
  user = input<IUser>({} as IUser);
  onSignOutClick = output();

  items = computed(() => {
    const username = this.user().name.split(' ')[0];
    const newItemMenu: MenuItem = {
      label: username,
      items: [
        {
          label: 'Sair',
          command: (event: MenuItemCommandEvent) => {
            this.onSignOutClick.emit();
          },
        },
      ],
    };
    return [...MENU_ITEMS, { separator: true }, newItemMenu];
  });
}
