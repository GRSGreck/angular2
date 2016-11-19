export interface InterfaceTodo {
    title: string;
    done: boolean;
}

export class Todo implements InterfaceTodo {
    title: string;
    done: boolean;

    constructor(title: string) {
        this.title = title;
        this.done = false;
    }
}