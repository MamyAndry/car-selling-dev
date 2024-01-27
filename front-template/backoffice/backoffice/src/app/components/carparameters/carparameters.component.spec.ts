import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarparametersComponent } from './carparameters.component';

describe('CarparametersComponent', () => {
  let component: CarparametersComponent;
  let fixture: ComponentFixture<CarparametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarparametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
