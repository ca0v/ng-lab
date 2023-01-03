import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'About Angular';

  // can I decorate this as sticky?
  collapse = true;
  likes: number = 0;

  toggleCollapse() {
    this.collapse = !this.collapse;
  }

  onLike(event: { likes: number }) {
    this.likes += event.likes;
    console.log('app.onLike', this.likes);
  }
}
