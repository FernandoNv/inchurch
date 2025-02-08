import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, take } from 'rxjs';
import { IEvent } from './event';
import { HttpClient } from '@angular/common/http';
import { IEventCreate } from './events-create/events-create.component';

@Injectable()
export class EventService {
  private readonly API_URL: string = `${environment.apiUrl}/events`;
  private readonly http = inject(HttpClient);

  constructor() {}

  getAllByFilter(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.API_URL).pipe(take(1));
  }

  getById(id: number): Observable<IEvent> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<IEvent>(url).pipe(take(1));
  }

  create(newEvent: IEventCreate): Observable<IEvent> {
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

    return this.http.delete<IEvent>(url).pipe(take(1));
  }
}
