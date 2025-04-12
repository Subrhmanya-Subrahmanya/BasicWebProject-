import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { InstrumentService } from '../../services/instrument.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-instrument-buttons',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, ScrollingModule],
  templateUrl: './instrument-buttons.component.html',
  styleUrl: './instrument-buttons.component.css'
})
export class InstrumentButtonsComponent {
  @Output() instrumentSelected = new EventEmitter<string>();
  public selectedInstrument: string | null = null;
  @Input() instruments: any;

  constructor(private instrumentService: InstrumentService,
    private cdr: ChangeDetectorRef
  ) {
    
  }
  ngOnInit() {
   // this.cdr.detectChanges();
  }
  selectInstrument(id: string | null) {

    if (id !== null) {
      this.instrumentSelected.emit(id);
    }
    
  }


}
