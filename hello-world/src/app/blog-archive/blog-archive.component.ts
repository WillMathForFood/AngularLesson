import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.css']
})
export class BlogArchiveComponent implements OnInit {
  private year: Number;
  private month: Number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.year = +params.get('year');
      this.month = +params.get('month');
    })
  }

  return() {
    this.router.navigate(['']);
  }
}
