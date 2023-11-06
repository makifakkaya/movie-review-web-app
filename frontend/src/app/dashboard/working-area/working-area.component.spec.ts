import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingAreaComponent } from './working-area.component';

describe('WorkingAreaComponent', () => {
  let component: WorkingAreaComponent;
  let fixture: ComponentFixture<WorkingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
