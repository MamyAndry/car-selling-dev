import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelparametersComponent } from './modelparameters.component';

describe('ModelparametersComponent', () => {
  let component: ModelparametersComponent;
  let fixture: ComponentFixture<ModelparametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelparametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
