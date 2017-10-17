import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('sidenav') sidenav: MatSidenav;
  
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(){
    // this.models = this.modelsService.getAll();
  }

  openDashboard() {
    this.router.navigate(['dashboard']);
  }

  openCreateRecipe() {
    this.router.navigate(['create-recipe']);
  }

  openRecipes() {
    this.router.navigate(['recipes']);
  }
}
