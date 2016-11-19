import { Component, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../shared/todo.service';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
    @Output() addedTodo = new EventEmitter();

    constructor(public todoService: TodoService) {}

    addTodo(title: string):void {
        this.todoService.addTodo(title);
    }
}