import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  updateRouting(routParams: {[key: string]: string | number}) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: routParams,
        queryParamsHandling: 'merge'
      }
    );
  }
}
