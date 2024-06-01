import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserComponent } from './user.component';
import { HelperService } from '../../services/helper-service/helper.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let helperService: HelperService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ id: 1 }))
          }
        },
        HelperService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    helperService = TestBed.inject(HelperService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateCurrentPage method of HelperService with "User"', () => {
    spyOn(helperService, 'updateCurrentPage');
    component.ngOnInit();
    expect(helperService.updateCurrentPage).toHaveBeenCalledWith('User');
  });
});
