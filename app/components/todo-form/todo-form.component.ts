import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo.model';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
    @Output() addedTodo = new EventEmitter();

    addTodo(title: string) {
        this.addedTodo.emit(new Todo(title));
    }
}