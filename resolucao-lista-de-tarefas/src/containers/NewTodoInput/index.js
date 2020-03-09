import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { updateTodoTitle } from "../../actions/todos";

const NewTodoInput = props => {
    const onUpdateTodoTitle = (event) => {
        props.updateTodoTitle(event.target.value);
    };
    return (
        <TextField 
            value ={props.currentTodoTitle} 
            onChange={onUpdateTodoTitle} />
    );
};

const mapStateToProps = state => ({
    currentTodoTitle: state.todos.currentTodoTitle
});

const mapDispatchToProps = dispatch => ({
    updateTodoTitle: (newTitle) => dispatch(updateTodoTitle(newTitle))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodoInput);