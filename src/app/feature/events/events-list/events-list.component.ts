import { Component, inject } from '@angular/core';
import { EventsCardComponent } from './events-card/events-card.component';
import { EventsHeaderComponent } from './events-header/events-header.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { IEvent } from '../event';
import { EventService } from '../event.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  imports: [EventsCardComponent, EventsHeaderComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
})
export class EventsListComponent {
  private readonly service = inject(EventService);
  private readonly confirmationService: ConfirmationService =
    inject(ConfirmationService);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly router = inject(Router);

  private events$: Observable<IEvent[]> = this.service.getAllByFilter();

  events = toSignal(this.events$, { initialValue: [] as IEvent[] });

  onDeleteButtonClick(e: { event: Event; id: number }) {
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
        this.service.deleteById(e.id).subscribe((next) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Evento excluido com sucesso',
          });
          this.router.navigate(['../events']);
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

  onEditButtonClick(id: number) {
    this.router.navigate(['../events/' + id]);
  }
}
