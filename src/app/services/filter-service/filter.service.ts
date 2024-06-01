import { Injectable } from '@angular/core';
import { Sort } from '../../models/sort.enum';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  Sort = Sort;

  constructor() { }

  onSortData(array: any[], key: string, value: string) {
    return array.sort((a, b) => {
      if (value === Sort.ASC ? a[key] < b[key] : a[key] > b[key]) {
        return 1
      } else {
        return -1
      }
    })
  }

  onFilterData(array: any[], value: string,  key: string, sortKey: string = '') {
    return array.filter((item) => item[key].includes(value) || (sortKey && item[sortKey].includes(value)));
  }
}
