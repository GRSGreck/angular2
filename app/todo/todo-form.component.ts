import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo-form',
    templateUrl: './app/todo/todo-form.component.html',
    styleUrls: ['./app/todo/todo-form.component.css']
})

export class TodoFormComponent {
    @Output() addedTodo = new EventEmitter();

    addTodo(title: string) {
        this.addedTodo.emit(new Todo(title));
    }
}