const initialState = {
    allTodos: [],
    currentTodoTitle: ""
};

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            const newTodo = { 
                id: action.payload.id, 
                title: state.currentTodoTitle, 
                completed: false 
            }
            const newTodos = [
                ...state.allTodos,
                newTodo
            ];
            return { ...state, allTodos: newTodos, currentTodoTitle: ""  };
        case "UPDATE_TODO_TITLE":
            return { ...state, currentTodoTitle: action.payload.newTitle};
        case "COMPLETE_TODO":
            const indexToEdit = state.allTodos.findIndex(
                todo => todo.id === action.payload.id
            );
            const newAllTodos = [...state.allTodos];

            newAllTodos[indexToEdit].completed = true;

            return { ...state, allTodos: newAllTodos };
        case "DELETE_TODO":
            const indexToRemove = state.allTodos.findIndex(
                todo => todo.id === action.payload.id
            );
            
            const allTodosWithoutRemoved = [...state.allTodos];

            allTodosWithoutRemoved.splice(indexToRemove, 1);
            
            return { ...state, allTodos: allTodosWithoutRemoved }
        default:
            return state;
    }
};

export default todos;