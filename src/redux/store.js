import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // ✅ importación corregida
import reducer from "./reducer.js";




const store = createStore(
  reducer,
 
  applyMiddleware(thunk)
);


export default store;
