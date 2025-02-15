import {
  Component,
  computed,
  effect,
  EffectRef,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { EventsCardComponent } from './events-card/events-card.component';
import { EventsHeaderComponent } from './events-header/events-header.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { formatDescriptionFn, formatStatusFn, IEvent } from '../event';
import { EventService } from '../event.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { EventsTableComponent } from './events-table/events-table.component';
import { EventDataService } from '../event-data.service';
import { PaginatorComponent } from '../../../ui/paginator/paginator.component';

const VIEW_CARD_LABEL = 'Ver tabela em lista';
const VIEW_TABLE_LABEL = 'Ver tabela em cards';

export interface IEventListItem extends Omit<IEvent, 'status'> {
  status: string;
}

@Component({
  selector: 'app-events-list',
  imports: [
    EventsCardComponent,
    EventsHeaderComponent,
    Button,
    EventsTableComponent,
    PaginatorComponent,
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
})
export class EventsListComponent implements OnDestroy {
  private readonly eventService = inject(EventService);
  private readonly eventDataService = inject(EventDataService);
  private readonly confirmationService: ConfirmationService =
    inject(ConfirmationService);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly router = inject(Router);

  private events$: Observable<IEvent[]> = this.eventDataService.getData();

  events = toSignal(this.events$, { initialValue: [] as IEvent[] });
  eventList = computed(() => this.formatEvents(this.events()));
  view = signal<'cards' | 'table'>('cards');
  viewLabel = signal(VIEW_CARD_LABEL);
  page = signal<number>(1);

  private _search: string = '';
  private effectRef: EffectRef;

  constructor() {
    this.effectRef = effect(() => {
      this.eventService.setNextDataBySearch(this._search, this.page());
    });
  }

  private formatEvents(next: IEvent[]): IEventListItem[] {
    return next.map((e) => ({
      ...e,
      description: formatDescriptionFn(e.description),
      status: formatStatusFn(e.status),
    }));
  }

  protected onDeleteButtonClick(e: { event: Event; id: number }) {
    this.confirmationService.confirm({
      target: e.event.target as EventTarget,
      header: 'Exclusão de Evento',
      message: 'Você deseja exlcuir esse Evento?',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Excluir',
        severity: 'danger',
      },

      accept: () => {
        this.eventService.deleteById(e.id).subscribe((next) => {
          this.eventService.setNextDataBySearch();
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Evento excluido com sucesso',
          });
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Exclusão Cancelada',
        });
      },
    });
  }

  protected onEditButtonClick(id: number) {
    this.router.navigate(['../events/' + id]);
  }

  protected onViewButtonClick() {
    this.view.update((prev) => (prev === 'cards' ? 'table' : 'cards'));
    this.viewLabel.update((prev) =>
      prev === VIEW_CARD_LABEL ? VIEW_TABLE_LABEL : VIEW_CARD_LABEL,
    );
  }

  protected onSearchChange(search: string): void {
    this._search = search;
    this.page.set(1);
    this.eventService.setNextDataBySearch(search, this.page());
  }

  ngOnDestroy(): void {
    this.effectRef.destroy();
  }
}
