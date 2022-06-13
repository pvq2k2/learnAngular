import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBlogFormComponent } from './category-blog-form.component';

describe('CategoryBlogFormComponent', () => {
  let component: CategoryBlogFormComponent;
  let fixture: ComponentFixture<CategoryBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBlogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
