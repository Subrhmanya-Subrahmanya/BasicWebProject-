import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentButtonsComponent } from './instrument-buttons.component';

describe('InstrumentButtonsComponent', () => {
  let component: InstrumentButtonsComponent;
  let fixture: ComponentFixture<InstrumentButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrumentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
