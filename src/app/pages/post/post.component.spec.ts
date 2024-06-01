import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HelperService } from '../../services/helper-service/helper.service';
import { IPost } from '../../models/post';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let helperService: Partial<HelperService>;

  beforeEach(async () => {
    helperService = {
      updateCurrentPage: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      imports: [PostComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of(convertToParamMap({ id: '1' })) } },
        { provide: HelperService, useValue: helperService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateCurrentPage method of HelperService with "Post"', () => {
    expect(helperService.updateCurrentPage).toHaveBeenCalledWith('Post');
  });

});