import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingVendorComponent } from './listing-vendor.component';

describe('ListingVendorComponent', () => {
  let component: ListingVendorComponent;
  let fixture: ComponentFixture<ListingVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
