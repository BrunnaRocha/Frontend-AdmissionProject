const initialState = {
    todos: []
};

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            const newTodo = { 
                id: action.payload.id, 
                title: action.payload.title, 
                completed: false 
            }
            const newTodos = [
                ...state.todos,
                newTodo
            ];
            return { ...state, tofod: newTodos };
        default:
            return state;
    }
};

export default todos;