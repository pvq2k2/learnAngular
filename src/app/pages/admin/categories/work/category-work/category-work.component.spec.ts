import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWorkComponent } from './category-work.component';

describe('CategoryWorkComponent', () => {
  let component: CategoryWorkComponent;
  let fixture: ComponentFixture<CategoryWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
