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
  appTitle = input<string>('', { alias: 'title' });
  description = input('', { transform: this.formatDescription });
  imageSrc = input<string>('');
  status = input('', { transform: this.formatStatus });
  createdAt = input<string>('');

  editButtonClick = output();
  deleteButtonClick = output();

  private formatDescription(value: string): string {
    if (value.length > 80) {
      return value?.slice(0, 80) + '...';
    }

    return value;
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
