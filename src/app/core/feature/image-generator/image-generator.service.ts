import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, of, take } from 'rxjs';

const NO_IMAGE_SRC = 'images/no-image.png';

@Injectable({
  providedIn: 'root',
})
export class ImageGeneratorService {
  private readonly IMAGE_API_URL = 'https://picsum.photos/300/200';
  private readonly http = inject(HttpClient);
  private readonly image$ = new BehaviorSubject(NO_IMAGE_SRC);

  constructor() {}

  public getLastImage() {
    return this.image$.asObservable();
  }

  public generateNewImage(): void {
    this.http
      .get<string>(this.IMAGE_API_URL)
      .pipe(
        take(1),
        catchError((error) => {
          console.log(error.url);

          return of(error.url || NO_IMAGE_SRC);
        }),
      )
      .subscribe((next) => {
        this.image$.next(next);
      });
  }
}
