export const createTodo = ( id, title ) => {
    return {
        type: "CREATE_TODO",
        payload: {
            id: id,
        }
    };
};

export const updateTodoTitle = newTitle => ({
    type: "UPDATE_TODO_TITLE",
    payload: {
        newTitle: newTitle,
    }
});