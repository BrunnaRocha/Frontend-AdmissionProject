import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListemItemText from "@material-ui/core/ListItemText";

 const TodoList = props => {
     return (
         <List>
            {props.todos.map(todo => (
                <ListItem>
                    <ListemItemText primary={todo.title}/>
                </ListItem>
            ))}
        </List>
     );
 };

 const mapStateToprops = state => ({
     todos: state.todos.allTodos
 });

 export default connect(mapStateToprops)(TodoList);