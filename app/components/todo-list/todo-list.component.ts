import { Component, Input } from '@angular/core';

import { Todo } from '../../shared/todo.model';

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];

    get sortedTodos() {
        return this.todos
            .slice(0)
            .sort((a: Todo, b: Todo) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;

                return 0;
            })
            .sort((a: Todo, b: Todo) => {
                if (a.done && !b.done) return 1;
                else if (!a.done && b.done) return -1;

                return 0;
            });
    }

    public onRemovedTodo(todo: Todo):void {
        let index = this.todos.indexOf(todo);
        if (index !== -1) this.todos.splice(index, 1);
    }
}
