export interface Todo {
    id: number;
    completed: boolean;
    text: string;
    createdAt: number;
}

export type Todos = Todo[];

let todoId = 0;

function generateTodo(text: string, id: number): Todo {
    return {
        id: id,
        completed: false,
        text: text,
        createdAt: Date.now()
    };
}

export function generateTodos(text: string[]): Todo[] {
    return text.map(t => {
        const res = generateTodo(t, todoId);
        todoId++;
        return res;
    });
}

