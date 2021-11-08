import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementupdateComponent } from './evenementupdate.component';

describe('EvenementupdateComponent', () => {
  let component: EvenementupdateComponent;
  let fixture: ComponentFixture<EvenementupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
