import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Hamburger', 'The best one from my favorite Restaurant', 'https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_640.jpg'),
    new Recipe('French Fries', 'These French fries will be yours', 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeElem: Recipe) {
    this.recipeWasSelected.emit(recipeElem);
  }
}