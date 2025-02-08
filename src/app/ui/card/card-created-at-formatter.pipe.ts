import { inject, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'cardCreatedAtFormatter',
})
export class CardCreatedAtFormatterPipe implements PipeTransform {
  private readonly datePipe = inject(DatePipe);

  transform(value: string): string | null {
    if (!value || value === '') throw new Error('Invalid date value');

    const date = new Date(value);
    if (isNaN(date.getTime())) return 'Data inválida';

    return this.datePipe.transform(date, "dd/MM/yyyy 'às' HH'h'mm");
  }
}
