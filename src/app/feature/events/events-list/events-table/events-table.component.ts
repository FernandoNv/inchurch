import { Component, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IEventListItem } from '../events-list.component';
import { NgOptimizedImage } from '@angular/common';
import { CardCreatedAtFormatterPipe } from '../../../../ui/card/card-created-at-formatter.pipe';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-events-table',
  imports: [TableModule, NgOptimizedImage, CardCreatedAtFormatterPipe, Button],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss',
})
export class EventsTableComponent {
  events = input<IEventListItem[]>([] as IEventListItem[]);

  onDeleteButtonClick = output<{ event: Event; id: number }>();
  onEditButtonClick = output<number>();

  protected editButtonClick(id: number): void {
    this.onEditButtonClick.emit(id);
  }

  protected deleteButtonClick(event: Event, id: number): void {
    this.onDeleteButtonClick.emit({ event, id });
  }
}
