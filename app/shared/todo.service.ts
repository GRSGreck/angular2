import { Injectable } from '@angular/core';

import { todoData } from './todo.data';
import { InterfaceTodo, Todo } from "./todo.model";

@Injectable()

export class TodoService {
    public getTodos(): Promise<InterfaceTodo[]> {
        return new Promise(resolve => setTimeout(() => resolve(todoData), 1000));
    }

    addTodo(title: string):void {
        let todo = new Todo(title);
        todoData.push(todo);
    }

    removeTodo(todo: InterfaceTodo):void {
        let index = todoData.indexOf(todo);
        if (index !== -1) todoData.splice(index, 1);
    }
}