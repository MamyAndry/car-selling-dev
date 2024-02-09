import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureFormComponent } from './voiture-form.component';

describe('VoitureFormComponent', () => {
  let component: VoitureFormComponent;
  let fixture: ComponentFixture<VoitureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoitureFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoitureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
