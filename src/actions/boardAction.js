export const DELETE_NOTE = "DELETE_NOTE";

export const deleteNote = (text) => ({
    type: DELETE_NOTE,
    payload:{text}
})


export const ADD_NOTE = "ADD_NOTE";
export const addNewNote = (text) => ({
    type: ADD_NOTE,
    payload:{text}
})

