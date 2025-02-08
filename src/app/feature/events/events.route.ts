import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './event.service';

export const routes: Routes = [
  {
    path: '',
    providers: [EventService],
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
