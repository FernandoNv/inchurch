import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';

export const routes: Routes = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: EventsListComponent,
        title: 'Eventos',
      },
    ],
  },
];
