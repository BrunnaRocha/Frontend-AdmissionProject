import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";


export const Todo = props => {
    const handleComplete = () => {
        props.onComplete(props.todo.id)
    };
    const handleDelete = () => {
        props.onDelete(props.todo.id)
    };


    return (
        <ListItem button onClick={handleComplete}>
            <ListItemText primary={props.todo.title} />
                <ListItemSecondaryAction>
                    <IconButton onClick={handleDelete}>
                        <CancelIcon />
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    )
};