import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Input("likesCount") likesCount: number;
  @Input("isLiked") isLiked: boolean;

  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : (-1);
  }
}
