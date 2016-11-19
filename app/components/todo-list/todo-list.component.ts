import { Component, OnInit} from '@angular/core';

import { InterfaceTodo } from '../../shared/todo.model';
import { TodoService } from "../../shared/todo.service";

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    todos: InterfaceTodo[] = [];

    constructor(private todoService: TodoService) {}

    ngOnInit():void {
        this.todoService.getTodos().then( todos => this.todos = todos );
    }

    get sortedTodos():InterfaceTodo[] {
        return this.todos
            .slice(0)
            .sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;

                return 0;
            })
            .sort((a, b) => {
                if (a.done && !b.done) return 1;
                else if (!a.done && b.done) return -1;

                return 0;
            });
    }

    public onRemovedTodo(todo: InterfaceTodo):void {
        this.todoService.removeTodo(todo);
    }
}
