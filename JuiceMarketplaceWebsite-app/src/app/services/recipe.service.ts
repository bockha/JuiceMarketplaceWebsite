import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { HttpModule, Http, Response } from '@angular/http';

@Injectable()
export class RecipeService {
  private recipesUrl = '/users/me/recipes';

  constructor(private http: Http) {
  }

  getRecipes(): Promise<Recipe[]> {
    return this.http
    .get(this.recipesUrl)
    .toPromise()
    .then(response => response.json() as Recipe[])
    .catch(this.handleError);
  }

  // just for testing purpose
  getRecipesSlowly(): Promise<Recipe[]> {
    return new Promise(resolve => {      
      setTimeout(() => resolve(this.getRecipes()), 2000); // Simulate server latency with 2 second delay
    });
  }

  deleteRecipe(recipe: Recipe) {
    return this.http
    .delete(this.recipesUrl + "/" + recipe.technologydatauuid)
    .toPromise()
    .then(function(response) {

    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
