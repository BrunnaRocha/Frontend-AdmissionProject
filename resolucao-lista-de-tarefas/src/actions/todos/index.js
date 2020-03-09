export const createTodo = ( id, title ) => {
    return {
        type: "CREATE_TODO",
        payload: {
            id: id,
            title: title
        }
    };
};