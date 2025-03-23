import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionSelectionChange } from '@angular/material/core';
import { InstrumentService } from '../../services/instrument.service';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

@Component({
  selector: 'app-instrument-details',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, ScrollingModule],
  templateUrl: './instrument-details.component.html',
  styleUrl: './instrument-details.component.css'
})
export class InstrumentDetailsComponent {

  @Input() instrument: any;
  commandResponse: string = '';
  selectedCommand: string | null = null;
  constructor(private instrumentService: InstrumentService) {}
  onCommandSelect(event: MatOptionSelectionChange, commandValue: string, id: string) {
    if (event.isUserInput) {
      this.selectedCommand = commandValue;
      this.commandResponse = 'Fetching response...'; // Show loading text
      this.instrumentService.getCommandResponse(id, commandValue).subscribe(response => {
        this.commandResponse = response;
      });
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['instrument'] && changes['instrument'].currentValue) {
      this.resetSelection();
    }
  }
  resetSelection(): void {
    this.selectedCommand = null; // Reset selection
    this.commandResponse = ''; // Reset response
  }
}
