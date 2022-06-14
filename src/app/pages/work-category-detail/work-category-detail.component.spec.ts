import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategoryDetailComponent } from './work-category-detail.component';

describe('WorkCategoryDetailComponent', () => {
  let component: WorkCategoryDetailComponent;
  let fixture: ComponentFixture<WorkCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCategoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
