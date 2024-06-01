import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  loaderService = inject(LoaderService);

  getUser(id: number): Observable<IUser> {
    this.loaderService.show();
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
