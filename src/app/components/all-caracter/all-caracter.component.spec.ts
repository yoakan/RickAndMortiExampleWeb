import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCaracterComponent } from './all-caracter.component';

describe('AllCaracterComponent', () => {
  let component: AllCaracterComponent;
  let fixture: ComponentFixture<AllCaracterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCaracterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCaracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
