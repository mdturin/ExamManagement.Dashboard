import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInfoUnauthorizedComponent } from './nav-bar-info-unauthorized.component';

describe('NavBarInfoUnauthorizedComponent', () => {
  let component: NavBarInfoUnauthorizedComponent;
  let fixture: ComponentFixture<NavBarInfoUnauthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarInfoUnauthorizedComponent]
    });
    fixture = TestBed.createComponent(NavBarInfoUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
