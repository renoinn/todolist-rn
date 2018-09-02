import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './containers/TodoList';
import AddTodoButton from './containers/AddTodoButton';
import todos from './reducers/todos';
import { Todos } from './states/TodoState';
import { Provider, Store } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

export type AppState = {
  todos: Todos
};

const reducers = combineReducers<AppState>({todos});
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store: Store<Todos> = createStore(persistedReducer);
const persistor: Persistor = persistStore(store);

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <View style={styles.container}>
        <AddTodoButton/>
        <TodoList/>
      </View>
      </PersistGate>
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
