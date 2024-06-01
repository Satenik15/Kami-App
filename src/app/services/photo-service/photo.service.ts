import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';
import { IPhoto } from '../../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private _photos$: BehaviorSubject<IPhoto[] | null> = new BehaviorSubject<IPhoto[] | null>(null);
  public photos$: Observable<IPhoto[] | null> = this._photos$.asObservable();

  http = inject(HttpClient);
  loaderService = inject(LoaderService);


  getPhotos(): Observable<IPhoto[]> {
    this.loaderService.show();
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        tap((data: IPhoto[]) => {
          if (data) {
            this._photos$.next(data);
          }
        }),
        finalize(() => this.loaderService.hide())
      );
  }

  getPhoto(id: number): Observable<IPhoto> {
    this.loaderService.show();
    return this.http.get<IPhoto>(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
