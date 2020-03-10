import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import { Todo } from "../../components/Todo"



const TodoList = props => {
    const onDelete = () => {
        console.log("apaga!");
    };
    const onComplete = () => {
        console.log("Completa!");
    };


    return (
        <List>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    title={todo.title} 
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
};

const mapStateToprops = state => ({
    todos: state.todos.allTodos
});

export default connect(mapStateToprops)(TodoList);