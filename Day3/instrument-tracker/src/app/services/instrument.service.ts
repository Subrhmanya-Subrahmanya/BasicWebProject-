import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

export interface Instrument {
  id: string;
  serialNumber: string;
  checksum: string;
  famiy: string;
  details: string;
  supportedCommands: { value: string; viewValue: string; commandResponse: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  private dataUrl = 'assets/instruments.json'

  constructor(private http: HttpClient) {

  }

  getInstruments() {
    return this.http.get<Instrument[]>(this.dataUrl);
  }

  getCommandResponse(instrumentId: string, commandValue: string): Observable<string> {
    return this.getInstruments().pipe(
      map(instruments => {
        const instrument = instruments.find(inst => inst.id === instrumentId);
        const command = instrument?.supportedCommands.find(cmd => cmd.value === commandValue);
        return command?.commandResponse ? `Response: ${command?.commandResponse}` : 'No response available';
      }),
      delay(2000) // Simulate 5-second delay
    );
  }
}

