import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryDetailComponent } from './blog-category-detail.component';

describe('BlogCategoryDetailComponent', () => {
  let component: BlogCategoryDetailComponent;
  let fixture: ComponentFixture<BlogCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCategoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
