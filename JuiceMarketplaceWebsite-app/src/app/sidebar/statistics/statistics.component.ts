import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openOverview() {
    this.router.navigateByUrl('/statistics/overview');
  }

  openCreators() {
    this.router.navigateByUrl('/statistics/creators');
  }

  openRecipes() {
    this.router.navigateByUrl('/statistics/recipes');
  }
}
