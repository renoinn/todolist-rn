import * as React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

export interface AddTodoButtonProps {
  onSubmit: (s: string) => void;
}

class AddButton extends React.Component<AddTodoButtonProps, {input: string}> {
  constructor(props: AddTodoButtonProps) {
    super(props);
    this.state = {
      input: '',
    };
  }
  onFormSubmit = (): void => {
    if(!this.state.input.trim()) {
      return;
    }

    this.props.onSubmit(this.state.input);
    this.setState({
      input: '',
    });
  }

  onInputChange = (text: string): void => {
    this.setState({
      input: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={this.onInputChange}
            value={this.state.input}
          />
          <Button
            onPress={this.onFormSubmit}
            title="Add Todo"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center'
  }
});

export default AddButton;