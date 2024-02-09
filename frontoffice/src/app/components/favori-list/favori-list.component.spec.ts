import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriListComponent } from './favori-list.component';

describe('FavoriListComponent', () => {
  let component: FavoriListComponent;
  let fixture: ComponentFixture<FavoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
