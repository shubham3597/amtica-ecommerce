import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCategoryComponent } from './root-category.component';

describe('RootCategoryComponent', () => {
  let component: RootCategoryComponent;
  let fixture: ComponentFixture<RootCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
