import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubajoutComponent } from './clubajout.component';

describe('ClubajoutComponent', () => {
  let component: ClubajoutComponent;
  let fixture: ComponentFixture<ClubajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
