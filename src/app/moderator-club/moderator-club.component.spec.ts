import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorClubComponent } from './moderator-club.component';

describe('ModeratorClubComponent', () => {
  let component: ModeratorClubComponent;
  let fixture: ComponentFixture<ModeratorClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
