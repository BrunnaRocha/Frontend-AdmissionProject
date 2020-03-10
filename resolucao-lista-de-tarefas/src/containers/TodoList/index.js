import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from "@material-ui/icons/Delete";

import IconButton from "@material-ui/core/IconButton";

 const TodoList = props => {
     return (
         <List>
            {props.todos.map(todo => (
                <ListItem button>
                    <ListItemText primary={todo.title}/>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
     );
 };

 const mapStateToprops = state => ({
     todos: state.todos.allTodos
 });

 export default connect(mapStateToprops)(TodoList);