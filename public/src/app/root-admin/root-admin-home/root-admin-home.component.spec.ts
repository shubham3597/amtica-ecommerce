import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAdminHomeComponent } from './root-admin-home.component';

describe('RootAdminHomeComponent', () => {
  let component: RootAdminHomeComponent;
  let fixture: ComponentFixture<RootAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
