import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemembreComponent } from './createmembre.component';

describe('CreatemembreComponent', () => {
  let component: CreatemembreComponent;
  let fixture: ComponentFixture<CreatemembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
