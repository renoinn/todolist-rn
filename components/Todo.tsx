import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface TodoProps {
    completed: boolean;
    text: string;
    onClick: () => void;
}

class Todo extends React.Component<TodoProps, {}> {
    render() {
        const { completed, text, onClick } = this.props;
        return (
            <TouchableOpacity onPress={onClick}>
            <View>
                <Text style={completed ? styles.completed : styles.normal}>{text}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    normal: {
        textDecorationLine: 'none'
    },
    completed: {
        textDecorationLine: 'line-through'
    }
});

export default Todo;