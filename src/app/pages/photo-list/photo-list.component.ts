import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SlicePipe, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { PhotoService } from '../../services/photo-service/photo.service';
import { FilterService } from '../../services/filter-service/filter.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { RouterService } from '../../services/router-service/router.service';
import { SearchComponent } from '../../components/search/search.component';
import { SelectComponent } from '../../components/select/select.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ISortParams } from '../../models/sortParams';
import { IPhoto } from '../../models/photo';
import { Sort } from '../../models/sort.enum';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [
    SlicePipe,
    TitleCasePipe,
    RouterModule,
    FontAwesomeModule,
    SearchComponent,
    SelectComponent,
    PaginationComponent
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photoservice = inject(PhotoService);
  filterService = inject(FilterService);
  helperService = inject(HelperService);
  routerService = inject(RouterService);
  route = inject(ActivatedRoute);

  destroy$: Subject<void> = new Subject();

  faLink = faLink;
  searchValue: string = '';
  startItem: number = 0;
  limit: number = 10;
  Sort = Sort;
  selectedItem!: ISortParams;
  photos: IPhoto[] = [];
  photosCopy: IPhoto[] = [];
  sortParams: ISortParams[] = [
    {
      id: 0,
      name: 'Title',
      value: Sort.DESC
    },
    {
      id: 1,
      name: 'Title',
      value: Sort.ASC
    }
  ];

  ngOnInit(): void {
    this.helperService.updateCurrentPage('Photo List');

    this.photoservice.photos$
      .pipe(
        switchMap((data: IPhoto[] | null) => {
          if (data) {

            // If data exists, update photos and photosCopy arrays
            this.photos = data;
            this.photosCopy = data;
          } else {

            // If data is null, fetch photos from the service
            this.photoservice.getPhotos().subscribe();
          }

          // Return the queryParams observable with takeUntil to manage subscriptions
          return this.route.queryParams.pipe(takeUntil(this.destroy$))
        })).subscribe((data: Params) => {
          if (this.photos && this.photos.length) {

            // get the corresponding data if the corresponding parameter exists
            if (data['page']) {
              this.updateRouting(data['page']);
              this.startItem = (+data['page'] - 1) * this.limit;
            } else {
              this.updateRouting(1);
            }

            if (data['search']) {
              this.searchValue = data['search'];
              this.getFilteredPhotos(data['search'], false);
            }

            if (data['sort'] && data['sortId']) {
              this.selectedItem = this.sortParams.find((param: ISortParams) => param.id === +data['sortId']) as ISortParams;
              this.onSort(this.selectedItem);
            }
          }
        });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getFilteredPhotos(text: string, updateRoutingValue = true) {
    const routParams = { search: text ? text : '' };
    this.photosCopy = this.filterService.onFilterData(this.photos, text, 'title');

    if (updateRoutingValue) {
      this.routerService.updateRouting(routParams);
    }
  }

  onSort(sort: ISortParams) {
    const routParams = { sort: sort.name, dir: sort.value, sortId: sort.id };
    this.photosCopy = this.filterService.onSortData(this.photosCopy, sort.name.toLowerCase(), sort.value) as IPhoto[];

    this.routerService.updateRouting(routParams);
  }

  onPaginate(page: number) {
    this.startItem = (page - 1) * this.limit;
    this.updateRouting(page);
  }

  updateRouting(page: number) {
    const routParams = { page, limit: this.limit };
    this.routerService.updateRouting(routParams);
  }
}
