import { ADD_TODO } from "./action";


const initialstate = {
    todo : [],
}

export const reducerSignup = (store=initialstate,{type,payload}) => {
    switch(type) {
        case ADD_TODO:
            return {
                ...store,
                todo:[...store.todo,payload]
            }   
        default :
            return store    
    }
}