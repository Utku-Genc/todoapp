import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.items
    }
    else {
      return this.model.items.filter(item => !item.action);
    }
  }
  addItem(value: string) {
    if (value != "") {
      this.model.items.push(new TodoItem(value, false))
    }
  }
}
