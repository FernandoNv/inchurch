import { MenuItem } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Início',
    icon: 'pi pi-clone',
    routerLink: '/dashboard',
  },
  {
    label: 'Pessoas',
    icon: 'pi pi-android',
    routerLink: '/people',
  },
  {
    label: 'Células',
    icon: 'pi pi-building-columns',
    routerLink: '/branch',
  },
  {
    label: 'Orações',
    icon: 'pi pi-apple',
    routerLink: '/prays',
  },
  {
    label: 'Kids',
    icon: 'pi pi-face-smile',
    routerLink: '/kids',
  },
  {
    label: 'Conteúdos',
    icon: 'pi pi-comments',
    routerLink: '/contents',
  },
  {
    label: 'Eventos',
    icon: 'pi pi-ticket',
    routerLink: '/events',
  },
];
