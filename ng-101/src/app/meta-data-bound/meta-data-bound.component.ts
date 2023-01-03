import { Attribute, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meta-data-bound',
  inputs: ['photoId'],
  outputs: ['like'],
  templateUrl: './meta-data-bound.component.html',
  styleUrls: ['./meta-data-bound.component.css'],
})
export class MetaDataBoundComponent {
  @Attribute('photoId') photoId: string | null = null;
  like = new EventEmitter<{ likes: number }>();

  constructor() {}

  onLike(likes = 1) {
    this.like.emit({ likes });
  }
}
