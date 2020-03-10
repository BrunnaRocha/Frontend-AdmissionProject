import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";


export const Todo = props => (
    <ListItem button onClick={props.onComplete}>
        <ListItemText primary={props.title} />
            <ListItemSecondaryAction>
                <IconButton onClick={props.onDelete}>
                    <CancelIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
)