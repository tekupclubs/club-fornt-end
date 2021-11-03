import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAjoutComponent } from './sponsor-ajout.component';

describe('SponsorAjoutComponent', () => {
  let component: SponsorAjoutComponent;
  let fixture: ComponentFixture<SponsorAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
