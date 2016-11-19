import { Component, Input } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];

    public onRemovedTodo(todo: Todo):void {
        let index = this.todos.indexOf(todo);
        if (index !== -1) this.todos.splice(index, 1);
    }
}
