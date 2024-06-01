import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { AlbumListComponent } from './album-list.component';
import { of } from 'rxjs';

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumListComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}), // Mock queryParams observable
            snapshot: {
              paramMap: convertToParamMap({})
            }
          }
        }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
