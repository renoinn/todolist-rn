export interface Todo {
    id: number;
    completed: boolean;
    text: string;
    createdAt: number;
    remindAt: number;
}

export type Todos = Todo[];

let todoId = 0;

function generateTodo(text: string, id: number): Todo {
    return {
        id: id,
        completed: false,
        text: text,
        createdAt: Date.now(),
        remindAt: Date.now() + (60 * 60 * 12 * 1000)
    };
}

export function generateTodos(text: string[]): Todo[] {
    return text.map(t => {
        const res = generateTodo(t, todoId);
        todoId++;
        return res;
    });
}

