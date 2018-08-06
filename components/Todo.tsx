import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DeleteButton from './DeleteButton';

interface TodoProps {
    completed: boolean;
    text: string;
    createdAt: number;
    onClick: () => void;
    onDelete: () => void;
}

class Todo extends React.Component<TodoProps, {}> {
    render() {
        const { completed, text, createdAt, onClick, onDelete } = this.props;
        return (
            <TouchableOpacity onPress={onClick}>
            <View>
                <Text style={completed ? styles.completed : styles.normal}>{text}</Text>
                <Text>{new Date(createdAt).toString()}</Text>
                <DeleteButton onDelete={onDelete}/>
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