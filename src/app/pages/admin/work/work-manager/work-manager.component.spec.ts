import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkManagerComponent } from './work-manager.component';

describe('WorkManagerComponent', () => {
  let component: WorkManagerComponent;
  let fixture: ComponentFixture<WorkManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
