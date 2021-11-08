import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgNavigationComponent } from './img-navigation.component';

describe('ImgNavigationComponent', () => {
  let component: ImgNavigationComponent;
  let fixture: ComponentFixture<ImgNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
