import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { IAlbum } from '../../models/album';
import { LoaderService } from '../loader-service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albums$: BehaviorSubject<IAlbum[] | null> = new BehaviorSubject<IAlbum[] | null>(null);
  public albums$: Observable<IAlbum[] | null> = this._albums$.asObservable();

  http = inject(HttpClient);
  loaderService = inject(LoaderService);

  getAlbums(): Observable<IAlbum[]> {
    this.loaderService.show();
    return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums/')
      .pipe(
        tap((data: IAlbum[]) => {
          if (data) {
            this._albums$.next(data);
          }
        }),
        finalize(() => this.loaderService.hide())
      );
  }

  getAlbum(id: number): Observable<IAlbum> {
    this.loaderService.show();
    return this.http.get<IAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
