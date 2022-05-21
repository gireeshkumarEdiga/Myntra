export const ADD_USER = "ADD_USER";


export const addUsers = (user) => ({
    type: ADD_USER,
    payload : user
});
