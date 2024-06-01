import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ id: '1' }))
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
