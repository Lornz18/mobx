import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobxAngularModule } from 'mobx-angular';
import { Store } from '../Store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobxAngularModule, CommonModule, FormsModule, ListboxModule, InputTextModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mobx';
  store = Store;

  text: any;

  addTodo: () => void;
  removeTodo: () => void;
  getCompleted: () => void;
  getInCompleted: () => void;
  setCompleted: () => void;

  cities = [] as { id: number; text: string; completed: boolean; }[];
  
  constructor() {
    this.addTodo = () => {
      Store.addTodo(this.text)
      this.text = ''
    };
    this.removeTodo = () => {
      Store.removeTodo(parseInt(this.text))
      this.text = ''
    };
    this.getCompleted = () => {
      Store.completedTodos
      console.log(Store.completedTodos)
      this.text = ''
    };
    this.setCompleted = () => {
      Store.setCompleted(parseInt(this.text))
      
      this.text = ''
    };
    this.getInCompleted = () => {
      Store.incCompletedTodos
      console.log(Store.incCompletedTodos)
      this.text = ''
    };
    
  }
  ngOnInit(): void {
    this.cities = this.store.todos
  }
}
