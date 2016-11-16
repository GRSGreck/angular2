import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: [ './app/todo/todo-item.component.css' ]
})

export class TodoItemComponent {
    @Input() todo: Todo;

    toggleDone() {
        this.todo.done = !this.todo.done;
    }

    removeTodo() {
        console.log('Remove todo', this.todo);
    }
}