import * as React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import Todo from './Todo';
import * as State from '../states/TodoState';

export interface TodoListProps {
    todos: State.Todos;
    onTodoClick: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

class TodoList extends React.Component<TodoListProps, {}> {
    _keyExtractor = (item: State.Todo, index: number) => item.id.toString();
    
    render() {
        const {todos, onTodoClick, onDeleteTodo} = this.props;
        return (
            <FlatList
                style={styles.list}
                data={todos}
                renderItem = {({item}) =>
                    <Todo
                        text={item.text}
                        completed={item.completed}
                        createdAt={item.createdAt}
                        onClick={() => onTodoClick(item.id)}
                        onDelete={() => onDeleteTodo(item.id)}
                    /> }
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
});

export default TodoList;