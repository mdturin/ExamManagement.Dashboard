import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInfoAuthorizedComponent } from './nav-bar-info-authorized.component';

describe('NavBarInfoAuthorizedComponent', () => {
  let component: NavBarInfoAuthorizedComponent;
  let fixture: ComponentFixture<NavBarInfoAuthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarInfoAuthorizedComponent]
    });
    fixture = TestBed.createComponent(NavBarInfoAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
