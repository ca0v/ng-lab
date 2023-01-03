import { Component, EventEmitter } from '@angular/core';
import { SystemTimeService } from 'src/app/systemtime.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent {
  startTime: number;
  runningTime: number = 0;
  likes = 0;
   
  tick = new EventEmitter<{ runningTime: number }>();
  
  constructor(private service: SystemTimeService) {
    this.startTime = service.getTime();
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      this.runningTime = this.service.getTime() - this.startTime;
      this.tick.emit({ runningTime: this.runningTime });
    }, 1000);
  }

  onLike(event: { likes: number }) {
    this.likes += event.likes;
    console.log('app.onLike', this.likes);
  }
}
