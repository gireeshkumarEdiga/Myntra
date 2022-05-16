import { ADD_PRODUCT} from "../reduxProducts/action";


const initialstate = {
    prod : [],
}

export const reducerProducts = (store=initialstate,{type,payload}) => {
    switch(type) {
        case ADD_PRODUCT:
            return {
                ...store,
                prod:[...store.prod,payload]
            }    
        default :
            return store    
    }
}