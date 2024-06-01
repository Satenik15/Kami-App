import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private _currentPage$ = new BehaviorSubject<string>('');
  public currentPage$ = this._currentPage$.asObservable();

  constructor() { }

  updateCurrentPage(value: string) {
    this._currentPage$.next(value);
  }
}
