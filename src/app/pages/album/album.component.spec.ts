import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AlbumComponent } from './album.component';
import { IAlbum } from '../../models/album';
import { AlbumService } from '../../services/album-service/album.service';
import { HelperService } from '../../services/helper-service/helper.service';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let mockAlbumService: Partial<AlbumService>;
  let mockHelperService: Partial<HelperService>;

  beforeEach(async () => {
    mockAlbumService = {
      getAlbum: () => of({ id: 1, title: 'Test Album' } as IAlbum)
    };

    mockHelperService = {
      updateCurrentPage: jasmine.createSpy()
    };
    
    await TestBed.configureTestingModule({
      imports: [AlbumComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ id: '1' }))
          }
        },
        { provide: AlbumService, useValue: mockAlbumService },
        { provide: HelperService, useValue: mockHelperService } 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateCurrentPage method of HelperService', () => {
    expect(mockHelperService.updateCurrentPage).toHaveBeenCalledWith('Album');
  });

  it('should fetch album data from AlbumService', () => {
    expect(component.album).toEqual({ id: 1, title: 'Test Album' } as IAlbum);
  });
});
