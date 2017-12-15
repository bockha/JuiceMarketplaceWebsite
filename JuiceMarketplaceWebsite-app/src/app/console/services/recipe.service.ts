import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TdmRecipe} from '../juice-program-configurator/models/tdmrecipe';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {
    // @see https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
    // This is to prevent the service clients from themselves emitting store values directly instead of calling action methods and therefore bypassing the store.
    private _recipes: BehaviorSubject<TdmRecipe[]> = new BehaviorSubject([]);
    public readonly recipes: Observable<TdmRecipe[]> = this._recipes.asObservable();

    private recipesUrl = '/api/users/me/recipes';

    constructor(private http: HttpClient) {
        this.updateRecipes();
    }

    updateRecipes() {
        console.log("Updating recipes");
        this.http.get<TdmRecipe[]>(this.recipesUrl).subscribe(recipes => {
            this._recipes.next(recipes);
        }, error => {
            this.handleError(error);
        });
    }

    deleteRecipe(recipe: TdmRecipe) {
        this.http.delete(this.recipesUrl + "/" + recipe.technologydatauuid, {
            responseType: 'text',
        }).subscribe(response => {
            this.updateRecipes();
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
