import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorprofileComponent } from './moderatorprofile.component';

describe('ModeratorprofileComponent', () => {
  let component: ModeratorprofileComponent;
  let fixture: ComponentFixture<ModeratorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
