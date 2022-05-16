import { compose, createStore } from "redux";
import { reducerSignup } from "./reduxSignup/reducer";
import { reducerProducts } from "./reduxProducts/reducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension'
import { reducerCart } from "./reduxCart/reducer";

const rootReducer = combineReducers({
    signup :reducerSignup,
    products : reducerProducts,
    cart : reducerCart,
})


export const store = createStore (
    rootReducer,
    composeWithDevTools(),
    // window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

console.log("initial",store.getState());


// import {dataReducer} from './storeData/dataReducer.js';
// import {cartReducer} from './Cart/cartReducer'
// import { combineReducers } from "redux";
// import {reducer as SignUpReducer } from "./signup/reducer";
// import { reducer as LogInReducer} from "./login/reducer"
// import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const rootReducer = combineReducers({
//     Data : dataReducer,
// 	Cart : cartReducer,
//   signup:SignUpReducer,
//   login:LogInReducer
// })

// const store = createStore(
//  rootReducer,
//   composeWithDevTools()
// );
