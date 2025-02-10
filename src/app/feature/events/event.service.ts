import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, take } from 'rxjs';
import { IEvent, IEventDTO } from './event';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventDataService } from './event-data.service';

const ITEMS_PER_PAGE = 8;

@Injectable()
export class EventService {
  private readonly API_URL: string = `${environment.apiUrl}/events`;
  private readonly http = inject(HttpClient);
  private readonly eventDataService = inject(EventDataService);

  constructor() {
    this.setNextDataBySearch();
  }

  setNextDataBySearch(page = 1, search: string = ''): void {
    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', ITEMS_PER_PAGE);

    if (search !== '') {
      params = params.set('title', search);
    }

    const data$ = this.http
      .get<IEvent[]>(this.API_URL, { params })
      .pipe(take(1));
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
}
