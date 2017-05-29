import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('a Test Recipe', 'This is simply a test', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
