import { Injectable } from '@angular/core';
import { Event } from 'src/app/model/event'
import { Location } from 'src/app/model/location'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  trialList: Event[] = [
    {
      name: 'Saudi Arabian Grand Prix',
      date: '2023.03.27.',
      time: '19:00',
      location: {
        address: 'Jeddah Corniche Circuit',
        city: 'Jeddah',
        country: 'Saud Arabia',
      },
    },
    {
      name: 'Bahrain Grand Prix',
      date: '2022.03.20',
      time: '16.00',
      location: {
        address: 'Bahrain International Circuit',
        city: 'Sakhir',
        country: 'Bahrain',
      },
    },
    {
      name: 'Australian Grand Prix',
      date: '2022.04.10',
      time: '07.00',
      location: {
        address: 'Albert Park',
        city: 'Melbourne',
        country: 'Australia',
      },
    },
    {
      name: 'Emilia-Romagna Grand Prix',
      date: '2022.04.24',
      time: '15.00',
      location: {
        address: ' Autodromo Enzo e Dino Ferrari',
        city: 'Imola',
        country: 'Italy',
      },
    },
  ];

  constructor() { }

  getAll(): Event[] {
    return this.trialList
  }
}
