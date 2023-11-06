import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingWorkingAreaComponent } from './listing-working-area.component';

describe('ListingWorkingAreaComponent', () => {
  let component: ListingWorkingAreaComponent;
  let fixture: ComponentFixture<ListingWorkingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingWorkingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingWorkingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
