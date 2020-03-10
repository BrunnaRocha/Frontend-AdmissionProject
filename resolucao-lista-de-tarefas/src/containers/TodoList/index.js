import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core"

 const TodoList = props => {
     return (
         <div>
            {props.todos.map(todo => (
                <p>{todo.title}</p>
            ))}
        </div>
     );
 };

 const mapStateToprops = state => ({
     todos: state.todos.allTodos
 });

 export default connect(mapStateToprops)(TodoList);