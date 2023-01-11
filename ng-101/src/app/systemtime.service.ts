import { Injectable } from '@angular/core';
``
@Injectable(/*{
  providedIn: 'root', // do not make this globally available just yet, playing with module scope
}*/)
export class SystemTimeService {
  getTime() {
    return new Date().getTime();
  }
  constructor() {}
}
