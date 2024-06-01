import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarComponent } from './left-sidebar.component';
import { ActivatedRoute } from '@angular/router';

describe('LeftSidebarComponent', () => {
  let component: LeftSidebarComponent;
  let fixture: ComponentFixture<LeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
