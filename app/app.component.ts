import { Component } from '@angular/core';
import { Todo } from './todo/todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title: string;
    todos: Todo[];

    constructor() {
        this.title = 'Angular 2Do!!!';
        this.todos = [];
    }

    addTodo(title: string) {
        this.todos.push(new Todo(title));
    }
}