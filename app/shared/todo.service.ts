import { Injectable } from '@angular/core';

import { todoData } from './todo.data';
import { InterfaceTodo } from "./todo.model";

@Injectable()

export class TodoService {
    getTodos(): InterfaceTodo[] {
        return todoData;
    }
}