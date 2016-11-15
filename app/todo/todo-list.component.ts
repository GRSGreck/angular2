import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: string[];
}
