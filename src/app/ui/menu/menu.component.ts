import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-menu',
  imports: [Menu, Ripple],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  //TODO: Initial Menu, not finished yet
  protected items: MenuItem[] = [
    {
      label: 'Início',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
    },
    {
      label: 'Pessoas',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
    },
    {
      label: 'Células',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
    },
    {
      label: 'Orações',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    },
    {
      label: 'Kids',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    },
    {
      label: 'Conteúdos',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    },
    {
      label: 'Eventos',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    },
  ];
}
