import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  //TODO: Initial Menu, not finished yet
  protected items: MenuItem[] = [
    {
      label: 'Início',
      icon: 'pi-palette',
      route: '/dashboard',
    },
    {
      label: 'Pessoas',
      icon: 'pi-users',
      route: '/people',
    },
    {
      label: 'Células',
      icon: 'pi-bullseye',
      route: '/branch',
    },
    {
      label: 'Orações',
      icon: 'pi-palette',
      route: '/prays',
    },
    {
      label: 'Kids',
      icon: 'pi-palette',
      route: '/kids',
    },
    {
      label: 'Conteúdos',
      icon: 'pi-palette',
      route: '/contents',
    },
    {
      label: 'Eventos',
      icon: 'pi-palette',
      route: '/events',
    },
  ];
}
