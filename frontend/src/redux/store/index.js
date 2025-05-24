import {createStore} from "redux" 
import FraisReducer from "../Reducers/FraisReducer"
const store = createStore(FraisReducer  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

export default store;