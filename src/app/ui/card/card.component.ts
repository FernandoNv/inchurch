import { Component, input, output } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { CardCreatedAtFormatterPipe } from './card-created-at-formatter.pipe';

@Component({
  selector: 'app-card',
  imports: [Card, Button, NgOptimizedImage, CardCreatedAtFormatterPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  id = input<number>(-1);
  appTitle = input<string>('', { alias: 'title' });
  description = input('', { transform: this.formatDescription });
  imageSrc = input<string>('');
  status = input('', { transform: this.formatStatus });
  createdAt = input<string>('');

  onEditButtonClick = output<number>();
  onDeleteButtonClick = output<{ event: Event; id: number }>();

  private formatDescription(value: string): string {
    const MAX_STRING_LENGTH = 75;
    if (value.length >= MAX_STRING_LENGTH) {
      return value?.slice(0, MAX_STRING_LENGTH) + '...';
    }

    return value;
  }

  private formatStatus(value: string): string {
    if (value === 'active') {
      return 'Ingressos ativos';
    }

    return 'Sem ingressos ativos';
  }

  protected editButtonClick(): void {
    this.onEditButtonClick.emit(this.id());
  }

  protected deleteButtonClick(event: Event): void {
    this.onDeleteButtonClick.emit({ event, id: this.id() });
  }
}
