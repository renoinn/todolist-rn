import * as React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

export interface DeleteButtonProps {
    onDelete: () => void;
}

class DeleteButton extends React.Component<DeleteButtonProps, {}> {

    render() {
        return (
            <View style={styles.button}>
                <Button
                    onPress={this.props.onDelete}
                    title="delete"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center'
    }
});

export default DeleteButton;