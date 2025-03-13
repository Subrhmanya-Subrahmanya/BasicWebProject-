import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstrumentButtonsComponent } from './components/instrument-buttons/instrument-buttons.component';
import { InstrumentDetailsComponent } from './components/instrument-details/instrument-details.component';
import { InstrumentService } from './services/instrument.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ InstrumentButtonsComponent,InstrumentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'instrument-tracker';
  selectedInstrument: any;
  instruments: any[] = []
  
  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.instrumentService.getInstruments().subscribe((data: any) => {
      this.instruments = data;
    })
  }
  
  onInstrumentSelected(id: string) {
    this.selectedInstrument = this.instruments.find(instrument => {
     return instrument.id === id;
    })
  }
}
