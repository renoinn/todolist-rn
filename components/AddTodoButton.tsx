import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  Col,
  Grid,
  Item as FormItem,
  Input,
  Icon,
  Button
} from 'native-base';

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
      <Grid style={styles.container}>
          <Col style={styles.input} size={4}>
            <FormItem style={{backgroundColor: '#fff'}} rounded>
              <Input
                style={{
                  height: 40,
                  fontSize: 13
                }}
                onChangeText={this.onInputChange}
                value={this.state.input}
                placeholder='やりたいことは？'/>
            </FormItem>
          </Col>
          <Col style={{justifyContent: 'center'}} size={1}>
            <Button
              style={styles.button}
              onPress={this.onFormSubmit}>
              <Icon type='Entypo' name='check' />
            </Button>
          </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: '#efefef',
    justifyContent: 'center'
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 56,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AddButton;