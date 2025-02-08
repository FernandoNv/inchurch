import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IEvent } from './event';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
  private readonly API_URL: string = `${environment.apiUrl}/events`;
  private readonly http = inject(HttpClient);

  constructor() {}

  getAllByFilter(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.API_URL);
  }

  getById(id: number): Observable<IEvent> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<IEvent>(url);
  }
}
