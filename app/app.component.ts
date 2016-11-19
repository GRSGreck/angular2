import { Component } from '@angular/core';

// import { Todo } from './shared/todo.model';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title: string;
    // todos: Todo[];

    constructor() {
        this.title = 'Angular 2Do!!!';
    }

    // onAddedTodo(todo: Todo) {
    //     this.todos.push(todo);
    // }
}