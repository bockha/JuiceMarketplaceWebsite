import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-console-menu',
    templateUrl: './console-menu.component.html',
    styleUrls: ['./console-menu.component.css']
})
export class ConsoleMenuComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openDashboard() {
        this.router.navigateByUrl('/console/dashboard');
    }

    openCreateRecipe() {
        this.router.navigateByUrl('/console/create-recipe');
    }

    openRecipes() {
        this.router.navigateByUrl('/console/recipes');
    }
}
