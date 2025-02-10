import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventService } from './event.service';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsEditComponent } from './events-edit/events-edit.component';

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
      {
        path: 'create',
        component: EventsCreateComponent,
        title: 'Criação de Eventos',
      },
      {
        path: ':id',
        component: EventsEditComponent,
        title: 'Edição de Evento',
      },
    ],
  },
];
