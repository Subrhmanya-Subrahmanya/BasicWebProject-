import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  private dataUrl = 'assets/instruments.json'

  constructor(private http: HttpClient) {

  }

  getInstruments() {
    return this.http.get(this.dataUrl);
  }
}
