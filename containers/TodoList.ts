import { connect, Dispatch } from 'react-redux';
import { toggleTodo, TodoAction, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';
import { Todos } from '../states/TodoState';
import { AppState } from '../App';

interface StateFromProps {
  todos: Todos;
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

function mapStateToProps(appState: AppState): StateFromProps {
  return {
    todos: appState.todos,
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    },
    onDeleteTodo: (id: number) => {
      dispatch(deleteTodo(id));
    },
  };
}

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);