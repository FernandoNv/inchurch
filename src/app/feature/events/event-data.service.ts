import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEvent } from './event';

@Injectable()
export class EventDataService {
  private events$ = new BehaviorSubject<IEvent[]>([] as IEvent[]);

  getData(): Observable<IEvent[]> {
    return this.events$.asObservable();
  }

  setNextData(next: IEvent[]) {
    this.events$.next(next);
  }
}
