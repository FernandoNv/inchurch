import { Component, input, model } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-paginator',
  imports: [Button],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  page = model(1);
  list = input<Object[]>();

  increment() {
    this.page.update((prev) => prev + 1);
  }

  decrement() {
    this.page.update((prev) => (prev - 1 > 0 ? prev - 1 : prev));
  }
}
