import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingRoleComponent } from './listing-role.component';

describe('ListingRoleComponent', () => {
  let component: ListingRoleComponent;
  let fixture: ComponentFixture<ListingRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
