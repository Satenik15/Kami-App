import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { IPost } from '../../models/post';
import { LoaderService } from '../loader-service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _posts$: BehaviorSubject<IPost[] | null> = new BehaviorSubject<IPost[] | null>(null);
  public posts$: Observable<IPost[] | null> = this._posts$.asObservable();

  http = inject(HttpClient);
  loaderService = inject(LoaderService);

  getPosts(): Observable<IPost[]> {
    this.loaderService.show();
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/')
      .pipe(
        tap((data: IPost[]) => {
          if (data) {
            this._posts$.next(data);
          }
        }),
        finalize(() => this.loaderService.hide())
      );
  }

  getPost(id: number): Observable<IPost> {
    this.loaderService.show();
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
