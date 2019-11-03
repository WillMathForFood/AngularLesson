import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-homepage',
  templateUrl: './blog-homepage.component.html',
  styleUrls: ['./blog-homepage.component.css']
})
export class BlogHomepageComponent {
  private archives: any[] = [
    { year: 2017, month: 1 },
    { year: 2017, month: 2 },
    { year: 2017, month: 3 }
  ];

  constructor() { }
}
