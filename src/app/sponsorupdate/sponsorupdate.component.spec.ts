import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorupdateComponent } from './sponsorupdate.component';

describe('SponsorupdateComponent', () => {
  let component: SponsorupdateComponent;
  let fixture: ComponentFixture<SponsorupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
