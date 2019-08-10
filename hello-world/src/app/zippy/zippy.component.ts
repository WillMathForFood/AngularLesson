import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  constructor() { }

  @Input('title') title: string;

  expanded: boolean;

  toggle() {
    this.expanded = !this.expanded;
  }
}
