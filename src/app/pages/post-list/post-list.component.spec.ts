import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PostListComponent } from './post-list.component';
import { PostService } from '../../services/post-service/post.service';
import { FilterService } from '../../services/filter-service/filter.service';
import { RouterService } from '../../services/router-service/router.service';
import { HelperService } from '../../services/helper-service/helper.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let postService: Partial<PostService>;
  let filterService: Partial<FilterService>;
  let routerService: Partial<RouterService>;
  let helperService: Partial<HelperService>;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(async () => {
    postService = {
      posts$: of([]),
      getPosts: () => of([])
    };

    filterService = {
      onFilterData: (data, text, ...fields) => data.filter(post => fields.some((field) => post[field as string].includes(text))),
      onSortData: (data, sortField, sortDirection) => data.slice().sort((a, b) => a[sortField].localeCompare(b[sortField]) * (sortDirection === 'asc' ? 1 : -1))
    };

    routerService = {
      updateRouting: jasmine.createSpy()
    };

    helperService = {
      updateCurrentPage: jasmine.createSpy()
    };

    activatedRouteStub = {
      queryParams: of({ page: 1, search: '', sort: '', sortId: '' })
    };
    await TestBed.configureTestingModule({
      imports: [PostListComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: PostService, useValue: postService },
        { provide: FilterService, useValue: filterService },
        { provide: RouterService, useValue: routerService },
        { provide: HelperService, useValue: helperService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateCurrentPage method of HelperService with "Post List"', () => {
    expect(helperService.updateCurrentPage).toHaveBeenCalledWith('Post List');
  });

  it('should update routing when filtering posts', () => {
    const searchText = 'test';
    component.getFilteredPosts(searchText);
    expect(routerService.updateRouting).toHaveBeenCalledWith({ search: searchText });
  });

  it('should update routing when sorting posts', () => {
    const sortParams = { name: 'title', value: 'asc', id: 1 };
    component.onSort(sortParams);
    expect(routerService.updateRouting).toHaveBeenCalledWith({ sort: 'title', dir: 'asc', sortId: 1 });
  });

  it('should update routing when paginating', () => {
    const page = 2;
    component.onPaginate(page);
    expect(routerService.updateRouting).toHaveBeenCalledWith({ page: 2, limit: 10 });
  });
});
