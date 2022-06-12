import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProjectFormComponent } from './category-project-form.component';

describe('CategoryProjectFormComponent', () => {
  let component: CategoryProjectFormComponent;
  let fixture: ComponentFixture<CategoryProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProjectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
