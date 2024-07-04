import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from '../../services/loader-service/loader.service';
import { AlbumService } from '../../services/album-service/album.service';
import { FilterService } from '../../services/filter-service/filter.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { RouterService } from '../../services/router-service/router.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { SearchComponent } from '../../components/search/search.component';
import { SelectComponent } from '../../components/select/select.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { IAlbum } from '../../models/album';
import { Sort } from '../../models/sort.enum';
import { ISortParams } from '../../models/sortParams';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [
    SlicePipe,
    RouterModule,
    FontAwesomeModule,
    UserCardComponent,
    SearchComponent,
    SelectComponent,
    PaginationComponent,
    AlbumCardComponent
  ],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent implements OnInit, OnDestroy {
  router = inject(Router);
  route = inject(ActivatedRoute);
  albumService = inject(AlbumService);
  loaderService = inject(LoaderService);
  filterService = inject(FilterService);
  helperService = inject(HelperService);
  routerService = inject(RouterService);

  destroy$: Subject<void> = new Subject();

  startItem: number = 0;
  limit: number = 10;
  searchValue: string = '';
  faFolderOpen = faFolderOpen;
  Sort = Sort;
  selectedItem!: ISortParams;
  albums!: IAlbum[];
  albumsCopy!: IAlbum[];
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
    this.helperService.updateCurrentPage('Album List');
    this.albumService.albums$
      .pipe(
        switchMap((data: IAlbum[] | null) => {
          if (data) {
            
          // If data exists, update albums and albumsCopy arrays
            this.albums = data;
            this.albumsCopy = data;
          } else {
          // If data is null, fetch albums from the service
            this.albumService.getAlbums().subscribe();
          }

          // Return the queryParams observable with takeUntil to manage subscriptions
          return this.route.queryParams.pipe(takeUntil(this.destroy$))
        })).subscribe((data: Params) => {
          if (this.albums && this.albums.length) {

            // get the corresponding data if the corresponding parameter exists
            if (data['page']) {
              this.updateRouting(data['page']);
              this.startItem = (+data['page'] - 1) * this.limit;
              console.log(this.startItem)
            } else {
              this.updateRouting(1);
            }

            if (data['search']) {
              this.searchValue = data['search'];
              this.getFilteredAlbums(data['search'], false);
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

  getFilteredAlbums(text: string, updateRoutingValue = true) {
    const routParams = { search: text ? text : '' };
    this.albumsCopy = this.filterService.onFilterData(this.albums, text, 'title');
    this.updateRouting(1);
    this.startItem = 0;

    if (updateRoutingValue) {
      this.routerService.updateRouting(routParams);
    }
  }

  onSort(sort: ISortParams) {
    const routParams = { sort: sort.name, dir: sort.value, sortId: sort.id };
    this.albumsCopy = this.filterService.onSortData(this.albumsCopy, sort.name.toLowerCase(), sort.value) as IAlbum[];

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
