import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent, FontAwesomeModule, RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' })
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct id', () => {
    const userId = 42;
    component.id = userId;
    fixture.detectChanges();
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.getAttribute('ng-reflect-router-link')).toBe(`/user,${userId}`);
  });

  it('should have correct icon', () => {
    expect(component.faUser).toEqual(faUser);
  });
});
