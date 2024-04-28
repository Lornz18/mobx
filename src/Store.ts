import { observable, action, computed } from 'mobx-angular';

export class Store {
      @observable static todos = [
        { id: 1,
          text: 'Buy milk',
          completed: false
        },
        { id: 2,
          text: 'Clean room',
          completed: false
        },
        { id: 3,
          text: 'Do laundry',
          completed: true
        }
      ];
      
      @action static addTodo(text: string) {
        const id = this.todos.length + 1;
        Store.todos.push({id: id, text: text, completed: false});
      }

      @action static removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }

      @action static setCompleted(id: number) {
        const todo = Store.todos.find(todo => todo.id === id);
        if (todo) {
          todo.completed = true;
        }
      }

      @computed static get completedTodos() {
        const filterTodo = this.todos.filter(todo => todo.completed);
        return this.todos = filterTodo;
      }

      @computed static get incCompletedTodos() {
        const filterTodo = this.todos.filter(todo => !todo.completed);
        return this.todos = filterTodo;
      }
}
