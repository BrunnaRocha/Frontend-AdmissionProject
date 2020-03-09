const initialState = {
    todos: [],
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
                ...state.todos,
                newTodo
            ];
            return { ...state, tofod: newTodos, currentTodoTitle: ""  };
        case "UPDATE_TODO_TITLE":
            return { ...state, currentTodoTitle: action.payload.newTitle}
        default:
            return state;
    }
};

export default todos;