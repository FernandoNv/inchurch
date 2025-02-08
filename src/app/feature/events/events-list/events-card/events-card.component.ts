import { Component, input, output } from '@angular/core';
import { CardComponent } from '../../../../ui/card/card.component';
import { IEvent } from '../../event';

@Component({
  selector: 'app-events-card',
  imports: [CardComponent],
  templateUrl: './events-card.component.html',
  styleUrl: './events-card.component.scss',
})
export class EventsCardComponent {
  events = input<IEvent[]>([] as IEvent[]);

  onDeleteButtonClick = output<{ event: Event; id: number }>();
  onEditButtonClick = output<number>();

  deleteButtonClick(event: { event: Event; id: number }) {
    this.onDeleteButtonClick.emit(event);
  }

  editButtonClick(id: number) {
    this.onEditButtonClick.emit(id);
  }
}
