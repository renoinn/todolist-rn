import { connect, Dispatch } from 'react-redux';
import { toggleTodo, TodoAction, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';
import { Todos } from '../states/TodoState';

interface StateFromProps {
  todos: Todos;
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

function mapStateToProps(state: Todos): StateFromProps {
  return {
    todos: state,
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