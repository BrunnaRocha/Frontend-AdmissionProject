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
            return { ...state, currentTodoTitle: action.payload.newTitle}
        default:
            return state;
    }
};

export default todos;