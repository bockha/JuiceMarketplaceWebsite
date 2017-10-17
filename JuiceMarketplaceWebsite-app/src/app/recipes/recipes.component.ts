import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  displayedColumns = ["position", "name", "revenue", "licensefee", "description", "action"];
  dataSource: RecipeDataSource | null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.dataSource = new RecipeDataSource(this.recipeService);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe).then(res => {
      console.log("Done with res: "+res);
    });
  }

}

export class RecipeDataSource extends DataSource<any> {
  constructor(private recipeService: RecipeService) {
    super();
  }
  
  subject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);

  connect(): Observable<Recipe[]> {
      console.log('connect');
      if (!this.subject.isStopped)
          this.recipeService.getRecipes()
              .then(res => {
                  // console.log(res)
                  this.subject.next(res)
              });
      return Observable.merge(this.subject);
  }

  disconnect() {
    console.log('disconnect');
    this.subject.complete();
      this.subject.observers = [];
  }
}
