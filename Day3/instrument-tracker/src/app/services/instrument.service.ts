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
      famiy: 'fp200'
    },
    {
      id: 'instrument2',
      serialNumber: 'SN124',
      checksum: '988585834',
      famiy: 'fk200'
    },
    {
      id: 'instrument3',
      serialNumber: 'SN126',
      checksum: '988585675',
      famiy: 'fp500'
    }

  ]
  getInstrumentById(id: string) {
    return this.instruments.find((instrument) => instrument.id === id
  )
  }
}
