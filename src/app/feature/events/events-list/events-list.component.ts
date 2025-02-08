import { Component, inject } from '@angular/core';
import { EventsCardComponent } from './events-card/events-card.component';
import { EventsHeaderComponent } from './events-header/events-header.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { IEvent } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  imports: [EventsCardComponent, EventsHeaderComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
})
export class EventsListComponent {
  private readonly service = inject(EventService);
  private events$ = this.service.getAllByFilter();
  events = toSignal(this.events$, { initialValue: [] as IEvent[] });
}
