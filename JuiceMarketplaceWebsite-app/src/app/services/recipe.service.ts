import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TdmRecipe } from '../juice-program-configurator/models/tdmrecipe';

@Injectable()
export class RecipeService {
  recipes = new BehaviorSubject<TdmRecipe[]>([]);
  private recipesUrl = '/users/me/recipes';

  constructor(private http: Http) {
  }

  updateRecipes() {
    return this.http
    .get(this.recipesUrl)
    .toPromise()
    .then(response => {
      var r = response.json() as TdmRecipe[];
      this.recipes.next(r);
    })
    .catch(this.handleError);
  }

  // getRecipes(): Promise<Recipe[]> {
  //   return this.http
  //   .get(this.recipesUrl)
  //   .toPromise()
  //   .then(response => response.json() as Recipe[])
  //   .catch(this.handleError);
  // }

  // // just for testing purpose
  // getRecipesSlowly(): Promise<Recipe[]> {
  //   return new Promise(resolve => {      
  //     setTimeout(() => resolve(this.getRecipes()), 2000); // Simulate server latency with 2 second delay
  //   });
  // }

  deleteRecipe(recipe: TdmRecipe) {
    return this.http
    .delete(this.recipesUrl + "/" + recipe.technologydatauuid)
    .toPromise()
    .then(response => {
      this.updateRecipes();
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
