import React from "react";
import { connect } from "react-redux";
import { Todo } from "../../components/Todo";
import List from "@material-ui/core/List";
import { completeTodo, deleteTodo  } from "../../actions/todos"




const TodoList = props => {
    const onDelete = id => {
    };
    const onComplete = id => {
    };


    return (
        <List>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo}
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

const mapDispatchToProps = dispatch => ({
    completeTodo: (id) => dispatch(completeTodo),
    deleteTodo: (id) => dispatch(deleteTodo)
})

export default connect(mapStateToprops)(TodoList);