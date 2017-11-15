import { Component, OnInit } from '@angular/core';
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
  displayedColumns = ["position", "name", "revenue", "licensefee", "description", "action"];
  dataSource: RecipeDataSource | null;
  errorMaxRecipes = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
    console.log("Test");
      this.route.params.subscribe(params => {
        this.errorMaxRecipes = params['errorMaxRecipes'] ? true : false;
      });
  }

  ngOnInit() {
    this.dataSource = new RecipeDataSource(this.recipeService);
  }

  deleteRecipe(recipe: TdmRecipe) {
    this.recipeService.deleteRecipe(recipe).then(res => {
      console.log("Done with res: "+res);
    });
  }

}

export class RecipeDataSource extends DataSource<any> {
  constructor(private recipeService: RecipeService) {
    super();
  }
  
  subject: BehaviorSubject<TdmRecipe[]> = new BehaviorSubject<TdmRecipe[]>([]);
  recipesSubscription: Subscription;

  connect(): Observable<TdmRecipe[]> {
      console.log('connect');
      this.recipesSubscription = this.recipeService.recipes.subscribe(recipes => {this.subject.next(recipes)});
      this.recipeService.updateRecipes();
      // if (!this.subject.isStopped)
      //     this.recipeService.getRecipes()
      //         .then(res => {
      //             // console.log(res)
      //             this.subject.next(res)
      //         });
      return Observable.merge(this.subject);
  }

  disconnect() {
    this.recipesSubscription.unsubscribe()
    console.log('disconnect');
    this.subject.complete();
      this.subject.observers = [];
  }

  private handleRecipesUpdate(recipes:TdmRecipe[]) {
    
  }
}
