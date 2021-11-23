import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterSearchComponent } from './caracter-search.component';

describe('CaracterSearchComponent', () => {
  let component: CaracterSearchComponent;
  let fixture: ComponentFixture<CaracterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
