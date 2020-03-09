import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { updateTodoTitle, createTodo } from "../../actions/todos";

const NewTodoInput = props => {
    const onUpdateTodoTitle = (event) => {
        props.updateTodoTitle(event.target.value);
    };

    const onEnterpress = event => {
        if (event.key === "Enter") {
            const newId = new Date().getTime(); 
            props.createNewTodo(newId)
        }
    };


    return (
        <TextField 
            value={props.currentTodoTitle}
            onKeyPress={onEnterpress} 
            onChange={onUpdateTodoTitle} />
    );
};

const mapStateToProps = state => ({
    currentTodoTitle: state.todos.currentTodoTitle
});

const mapDispatchToProps = dispatch => ({
    createNewTodo: (id) => dispatch(createTodo(id)),
    updateTodoTitle: newTitle => dispatch(updateTodoTitle(newTitle))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodoInput);