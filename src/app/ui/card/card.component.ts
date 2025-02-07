import { Component, input, output } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-card',
  imports: [Card, Button],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  appTitle = input<string>('', { alias: 'title' });
  description = input('', { transform: this.formatDescription });
  imageSrc = input<string>('');
  status = input('', { transform: this.formatStatus });
  createdAt = input<string>('');

  editButtonClick = output();
  deleteButtonClick = output();

  private formatDescription(value: string): string {
    return value?.slice(0, 80) + '...';
  }

  protected onEditButtonClick(): void {
    this.editButtonClick.emit();
  }

  protected onDeleteButtonClick(): void {
    this.deleteButtonClick.emit();
  }

  private formatStatus(value: string): string {
    if (value === 'active') {
      return 'Ingressos ativos';
    }

    return 'Sem ingressos ativos';
  }
}
