import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor() {

  }
  private instruments = [
    {
      id: 'instrument1',
      serialNumber: 'SN123',
      checksum: '98858585',
      famiy: 'FP200',
      details: 'The instrument monitors the power (SN123-FP200)'
    },
    {
      id: 'instrument2',
      serialNumber: 'SN124',
      checksum: '988585834',
      famiy: 'FK200',
      details: 'The instrument monitors the thrust (SN124-FK200)'
    },
    {
      id: 'instrument3',
      serialNumber: 'SN126',
      checksum: '988585675',
      famiy: 'FP500',
      details: 'The instrument details are dummy (SN126-FP500)'
    }

  ]
  getInstrumentById(id: string) {
    return this.instruments.find((instrument) => instrument.id === id
  )
  }
}
