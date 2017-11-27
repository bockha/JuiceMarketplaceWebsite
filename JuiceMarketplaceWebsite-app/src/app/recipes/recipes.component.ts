import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { RecipeService } from '../services/recipe.service';
import { TdmRecipe } from '../juice-program-configurator/models/tdmrecipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  displayedColumns = ["position", "name", "description", "licensefee", "revenue", "action"];
  dataSource = new MatTableDataSource<TdmRecipe>();
  errorMaxRecipes = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
      this.route.params.subscribe(params => {
        this.errorMaxRecipes = params['errorMaxRecipes'] ? true : false;
      });
      console.log("Hallo!");
      this.recipeService.recipes.subscribe(recipes => {
        this.dataSource.data = recipes;
      });
  }

  ngOnInit() {
  }

  deleteRecipe(recipe: TdmRecipe) {
    this.recipeService.deleteRecipe(recipe);
    // this.recipeService.deleteRecipe(recipe).then(res => {
    //   console.log("Done with res: "+res);
    // });
  }

}
