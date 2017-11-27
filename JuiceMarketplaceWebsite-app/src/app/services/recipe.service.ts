import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TdmRecipe } from '../juice-program-configurator/models/tdmrecipe';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
  // @see https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
  // This is to prevent the service clients from themselves emitting store values directly instead of calling action methods and therefore bypassing the store.
  private _recipes: BehaviorSubject<TdmRecipe[]> = new BehaviorSubject([]);
  public readonly recipes: Observable<TdmRecipe[]> = this._recipes.asObservable();

  // recipes = new BehaviorSubject<TdmRecipe[]>([]);
  private recipesUrl = '/users/me/recipes';

  constructor(private http: HttpClient) {
    this.updateRecipes();
  }

  updateRecipes() {
    this.http.get<TdmRecipe[]>(this.recipesUrl).subscribe(recipes => {
      this._recipes.next(recipes);
    });
    // return this.http.get<TdmRecipe>(this.recipesUrl);
    // .toPromise()
    // .then(response => {
    //   var r = response.json() as TdmRecipe[];
    //   this.recipes.next(r);
    // })
    // .catch(this.handleError);
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
    var x = this.http.delete(this.recipesUrl + "/" + recipe.technologydatauuid, {
      responseType: 'text',
    }).subscribe(response => {
      this.updateRecipes();
    });
    console.log("X");
    console.log(x);
    // return this.http
    // .delete(this.recipesUrl + "/" + recipe.technologydatauuid)
    // .toPromise()
    // .then(response => {
    //   this.updateRecipes();
    // });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
