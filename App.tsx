import * as React from 'react';
import * as Expo from "expo";
import RootComponent from './components/RootComponent';
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

export type Loading = {
  isReady: boolean
};

const reducers = combineReducers<AppState>({todos});
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store: Store<Todos> = createStore(persistedReducer);
const persistor: Persistor = persistStore(store);

export default class App extends React.Component<{}, Loading> {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  
  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    );
  }
}
