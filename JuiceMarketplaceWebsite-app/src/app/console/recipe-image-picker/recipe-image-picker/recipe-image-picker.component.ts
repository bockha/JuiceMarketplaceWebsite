import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-recipe-image-picker',
    templateUrl: './recipe-image-picker.component.html',
    styleUrls: ['./recipe-image-picker.component.css']
})
export class RecipeImagePickerComponent implements OnInit {

    constructor() {
    }

    backgroundColor = '#ffffff';

    colors: Array<string> = [
        '#0078ff',
        '#bd00ff',
        '#ff9a00',
        '#01ff1f',
        '#e3ff00',
        '#ffc780',
        '#f9d683',
        '#fffa86',
        '#e9ff74',
        '#d8ff69',
        '#e8f4f3',
        '#d3e7ea',
        '#c4e5f2',
        '#afe1f4',
        '#8dd0f0'
    ];

    imagerow = 0;
    imagecolumn = 0;

    images: Array<Array<string>> = [
        ['1', '2', '3', '4', '5', '6'],
        ['21', '22', '23', '24', '25', '26'],
        ['41', '42', '43', '44', '45', '46'],
        ['61', '62', '63', '64', '65', '66']
    ];

    ngOnInit() {
        this.randomImage();
        this.randomBackgroundColor();
    }

    setColor(color: string) {
        this.backgroundColor = color;
    }

    upClick() {
        this.imagerow--;
        if (this.imagerow < 0) {
            this.imagerow = this.images.length;
        }
        if (this.images[this.imagerow] && this.imagecolumn >= this.images[this.imagerow].length) {
            this.imagecolumn = this.images[this.imagerow].length - 1;
        }
    }

    downClick() {
        this.imagerow++;
        if (this.imagerow >= this.images.length) {
            this.imagerow = 0;
        }
        if (this.images[this.imagerow] && this.imagecolumn >= this.images[this.imagerow].length) {
            this.imagecolumn = this.images[this.imagerow].length - 1;
        }
    }

    leftClick() {
        this.imagecolumn--;
        if (this.imagecolumn < 0) {
            this.imagecolumn = this.images[this.imagerow].length;
        }

    }

    rightClick() {
        this.imagecolumn++;
        if (this.imagecolumn >= this.images[this.imagerow].length) {
            this.imagecolumn = 0;
        }
    }

    randomImage() {
        this.imagerow = Math.floor(Math.random() * Math.floor(this.images.length));
        this.imagecolumn = Math.floor(Math.random() * Math.floor(this.images[this.imagerow].length));
    }

    randomBackgroundColor() {
        this.colors = this.shuffle(this.colors);
        this.backgroundColor = this.colors[0];
    }

    shuffle(a: Array<any>) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    getImage() {
        return this.images[this.imagerow][this.imagecolumn];
    }
}
