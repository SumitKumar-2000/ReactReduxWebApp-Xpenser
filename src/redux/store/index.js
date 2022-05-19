import { combineReducers, createStore} from "redux";
import { expenseReducer } from "../reducers/expenses";;

const reducer = combineReducers({
    expenses : expenseReducer,
})

const initialState={}
const  store = createStore(
    reducer,
    initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;