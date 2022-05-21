import { ADD_PRODUCT} from "../reduxProducts/action";


const initialstate = {
    products : [],
}

export const reducerProducts = (store=initialstate,{type,payload}) => {
    switch(type) {
        case ADD_PRODUCT:
            return {
                ...store,
                products:[...payload]
            }    
        default :
            return store    
    }
}