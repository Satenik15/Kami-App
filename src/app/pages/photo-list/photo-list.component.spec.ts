import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { PhotoListComponent } from './photo-list.component';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
