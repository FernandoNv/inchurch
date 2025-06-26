import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, take } from 'rxjs';
import { IEvent, IEventDTO } from './event';
import { HttpClient } from '@angular/common/http';
import { EventDataService } from './event-data.service';

@Injectable()
export class EventService {
  private readonly API_URL: string = `${environment.apiUrl}/events`;
  private readonly http = inject(HttpClient);
  private readonly eventDataService = inject(EventDataService);

  constructor() {
    this.setNextDataBySearch();
  }

  setNextDataBySearch(search: string = '', page = 1, itemsPerPage = 8): void {
    const data$ = this.http.get<IEvent[]>(this.API_URL).pipe(
      map((next) => this.filterDataBySearch(next, search)),
      map((next) => next.slice((page - 1) * itemsPerPage, page * itemsPerPage)),
      take(1),
    );

    data$.subscribe((next) => this.eventDataService.setNextData(next));
  }

  getById(id: number): Observable<IEvent> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<IEvent>(url).pipe(take(1));
  }

  create(newEvent: IEventDTO): Observable<IEvent> {
    const dateStr = new Date().toISOString();
    return this.http
      .post<IEvent>(this.API_URL, {
        ...newEvent,
        createdAt: dateStr,
      })
      .pipe(take(1));
  }

  deleteById(id: number): Observable<IEvent> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<IEvent>(url);
  }

  update(data: IEventDTO, id: number): Observable<IEvent> {
    const url = `${this.API_URL}/${id}`;
    return this.http.put<IEvent>(url, data).pipe(take(1));
  }

  private filterDataBySearch(data: IEvent[], search: string) {
    if (data.length === 0) return data;

    const keys = ['title', 'description'];

    return data.filter((d) =>
      keys.some((k) =>
        // @ts-ignore
        d[k].toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      ),
    );
  }
}
