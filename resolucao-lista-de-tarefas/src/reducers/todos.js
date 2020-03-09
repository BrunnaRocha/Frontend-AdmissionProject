const initialState = {
    todos: []
};

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TODO";
            const newTodos = [
                ...state.todos,
                { title: action.payload.title, completed: false }
            ];
            return { ...state, tofod: newTodos };
        default:
            return state;
    }
};