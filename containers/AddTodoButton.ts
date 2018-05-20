import { connect, Dispatch } from 'react-redux';
import { addTodo, TodoAction } from '../actions';
import AddButton, { AddTodoButtonProps } from '../components/AddTodoButton';
import { Todos } from '../states/TodoState';

function mapStateToProps(state: any): {} {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): AddTodoButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    },
  };
}

export default connect<{}, AddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);