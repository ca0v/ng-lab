import { Component } from '@angular/core';
import { SystemTimeService } from 'src/app/systemtime.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent {
  startTime: number;
  constructor(private service: SystemTimeService) {
    this.startTime = service.getTime();
  }

  getRunningTime() {
    return this.service.getTime() - this.startTime;
  }
}
