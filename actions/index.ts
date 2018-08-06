let nextTodoId = 0;

export enum TodoActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

export interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO;
  id: number;
}

export interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
  id: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

export function addTodo(text: string): AddTodoAction {
  return {
    type: TodoActionType.ADD_TODO,
    id: nextTodoId++,
    text: text,
  };
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TodoActionType.TOGGLE_TODO,
    id: id,
  };
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: TodoActionType.DELETE_TODO,
    id: id,
  };
}