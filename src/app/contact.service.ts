import { Injectable } from '@angular/core';

export interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  private readonly contacts: Contact[] = [
    { firstName: 'Jane', lastName: 'Doe', phoneNumber: 7808009097 },
    { firstName: 'John', lastName: 'Doe', phoneNumber:  7808009097},
    { firstName: 'Sam', lastName: 'Curran', phoneNumber: 7808009097 },
    { firstName: 'Kane', lastName: 'Williamnson', phoneNumber:7808009097  },
    { firstName: 'Chris', lastName: 'Morris', phoneNumber:7808009097 },

  ];

  getContacts(): Contact[] {
    return this.contacts;
  }
}
