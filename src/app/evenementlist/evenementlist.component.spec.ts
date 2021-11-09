import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementlistComponent } from './evenementlist.component';

describe('EvenementlistComponent', () => {
  let component: EvenementlistComponent;
  let fixture: ComponentFixture<EvenementlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
