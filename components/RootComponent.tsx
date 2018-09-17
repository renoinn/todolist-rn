import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import {Constants} from 'expo';
import {
    Container,
    Header,
    Body,
    Item as FormItem,
    Input,
    Label,
    Title,
  } from 'native-base';
import TodoList from '../containers/TodoList';
import AddTodoButton from '../containers/AddTodoButton';

export default class RootComponent extends React.Component<{}> {
    render() {
        return (
          <KeyboardAvoidingView style = {{ flex: 1 }} behavior="padding">
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>Best App Ever!</Title>
                    </Body>
                </Header>
                <TodoList/>
                <AddTodoButton/>
            </Container>
          </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#fff'
    }
  });