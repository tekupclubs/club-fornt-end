import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsfournisseurComponent } from './detailsfournisseur.component';

describe('DetailsfournisseurComponent', () => {
  let component: DetailsfournisseurComponent;
  let fixture: ComponentFixture<DetailsfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsfournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
