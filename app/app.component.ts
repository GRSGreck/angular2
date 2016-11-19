import { Component } from '@angular/core';
import { TodoService } from "./shared/todo.service";

// import { Todo } from './shared/todo.model';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title: string;

    constructor(private todoService: TodoService) {
        this.title = 'Angular 2Do!!!';
    }
}