import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './containers/TodoList';
import AddTodoButton from './containers/AddTodoButton';
import todos from './reducers/todos';
import { Todos } from './states/TodoState';
import { Provider, Store } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//const reducers = combineReducers({todos});
const store: Store<Todos> = createStore(todos, []);

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <AddTodoButton/>
        <TodoList/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
