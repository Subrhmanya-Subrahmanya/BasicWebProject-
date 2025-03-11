import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instrument-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instrument-details.component.html',
  styleUrl: './instrument-details.component.css'
})
export class InstrumentDetailsComponent {
  @Input() instrument: any;

}
