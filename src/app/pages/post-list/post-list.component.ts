import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { PostService } from '../../services/post-service/post.service';
import { FilterService } from './../../services/filter-service/filter.service';
import { RouterService } from '../../services/router-service/router.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { SearchComponent } from '../../components/search/search.component';
import { SelectComponent } from '../../components/select/select.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { IPost } from '../../models/post';
import { ISortParams } from '../../models/sortParams';
import { sortParams } from './post-list.util';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    SlicePipe,
    SearchComponent,
    SelectComponent,
    PaginationComponent,
    UserCardComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit, OnDestroy {
  postService = inject(PostService);
  filterService = inject(FilterService);
  helperService = inject(HelperService);
  routerService = inject(RouterService);
  route = inject(ActivatedRoute);

  destroy$: Subject<void> = new Subject();

  searchValue: string = '';
  startItem: number = 0;
  limit: number = 10;
  selectedItem!: ISortParams;
  posts: IPost[] = [];
  postsCopy: IPost[] = [];
  sortParams: ISortParams[] = sortParams;
  faEye = faEye;

  ngOnInit(): void {
    this.helperService.updateCurrentPage('Post List');
    this.postService.posts$
      .pipe(
        switchMap((data: IPost[] | null) => {
          if (data) {

            // If data exists, update posts and postsCopy arrays
            this.posts = data;
            this.postsCopy = data;
          } else {
            
            // If data is null, fetch posts from the service
            this.postService.getPosts().subscribe();
          }
          
          // Return the queryParams observable with takeUntil to manage subscriptions
          return this.route.queryParams.pipe(takeUntil(this.destroy$))
        })
      ).subscribe((data: Params) => {
        if (this.posts && this.posts.length) {
          
          // get the corresponding data if the corresponding parameter exists
          if (data['page']) {
            this.updateRouting(data['page']);
            this.startItem = (+data['page'] - 1) * this.limit;
          } else {
            this.updateRouting(1);
          }

          if (data['search']) {
            this.searchValue = data['search'];
            this.getFilteredPosts(data['search'], false);
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

  getFilteredPosts(text: string, updateRoutingValue = true) {
    const routParams = { search: text ? text : '' };
    this.postsCopy = this.filterService.onFilterData(this.posts,  text, 'title','body');

    if (updateRoutingValue) {
      this.routerService.updateRouting(routParams);
    }
  }

  onSort(sort: ISortParams) {
    const routParams = { sort: sort.name, dir: sort.value, sortId: sort.id };
    this.postsCopy = this.filterService.onSortData(this.postsCopy, sort.name.toLowerCase(), sort.value) as IPost[];

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
