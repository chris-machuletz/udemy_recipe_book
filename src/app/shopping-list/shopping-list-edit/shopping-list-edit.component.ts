import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredient = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(name: HTMLInputElement, amount: HTMLInputElement, unit: HTMLInputElement) {
    
    this.ingredient.emit({name: name.value, amount: parseInt(amount.value), unit: unit.value});
  }

}
