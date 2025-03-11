import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstrumentButtonsComponent } from './components/instrument-buttons/instrument-buttons.component';
import { InstrumentDetailsComponent } from './components/instrument-details/instrument-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InstrumentButtonsComponent,InstrumentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'instrument-tracker';
}
