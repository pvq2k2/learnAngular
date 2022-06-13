import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWorkFormComponent } from './category-work-form.component';

describe('CategoryWorkFormComponent', () => {
  let component: CategoryWorkFormComponent;
  let fixture: ComponentFixture<CategoryWorkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWorkFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
