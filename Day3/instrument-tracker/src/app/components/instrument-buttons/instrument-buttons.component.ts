import { Component, EventEmitter, Output } from '@angular/core';
import { InstrumentService } from '../../services/instrument.service';

@Component({
  selector: 'app-instrument-buttons',
  standalone: true,
  imports: [],
  templateUrl: './instrument-buttons.component.html',
  styleUrl: './instrument-buttons.component.css'
})
export class InstrumentButtonsComponent {
  @Output() instrumentSelected = new EventEmitter<string>();
  selectedInstrument: string | null = null;

  constructor(private instrumentService: InstrumentService) {
    
  }

  selectInstrument(id: string) {
    this.selectedInstrument = id;
    this.instrumentSelected.emit(id);
    
  }


}
