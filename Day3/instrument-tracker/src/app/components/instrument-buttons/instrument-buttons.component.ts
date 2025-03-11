import { Component } from '@angular/core';
import { InstrumentService } from '../../services/instrument.service';

@Component({
  selector: 'app-instrument-buttons',
  standalone: true,
  imports: [],
  templateUrl: './instrument-buttons.component.html',
  styleUrl: './instrument-buttons.component.css'
})
export class InstrumentButtonsComponent {

  constructor(private instrumentService: InstrumentService) {
    
  }

  selectInstrument(id: string) {
    const result = this.instrumentService.getInstrumentById(id);
    console.log(result);
    
  }


}
