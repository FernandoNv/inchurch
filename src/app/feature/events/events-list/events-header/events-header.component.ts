import { Component, OnInit, output, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, startWith } from 'rxjs';

@Component({
  selector: 'app-events-header',
  imports: [Button, IconField, InputIcon, InputText, RouterLink, FormsModule],
  templateUrl: './events-header.component.html',
  styleUrl: './events-header.component.scss',
})
export class EventsHeaderComponent implements OnInit {
  protected search = signal('');

  onSearchChange = output<string>();

  protected search$ = toObservable(this.search).pipe(
    startWith(''),
    debounceTime(500),
    distinctUntilChanged(),
    filter((next) => next === '' || next.length > 2),
    takeUntilDestroyed(),
  );

  ngOnInit(): void {
    this.search$.subscribe((next) => this.onSearchChange.emit(next));
  }
}
