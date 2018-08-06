import { Todos } from '../states/TodoState';
import { TodoActionType, TodoAction } from '../actions';

const initialState: Todos = [{
  id: 0,
  completed: false,
  text: 'initial todo',
  createdAt: Date.now()
}];

function todos(state: Todos = initialState, action: TodoAction): Todos {
  switch(action.type) {
   case TodoActionType.ADD_TODO:
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
        createdAt: Date.now()
      },
    ];
  case TodoActionType.TOGGLE_TODO:
    return state.map(todo =>
      (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
    );
  case TodoActionType.DELETE_TODO:
    return state.filter(todo => todo.id !== action.id);
    
  default:
    return state;
 }
}

export default todos;