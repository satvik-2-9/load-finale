import {  combineReducers ,applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer,userReducer,allUsersReducer,driverDetailsReducer,authdriver,uploadReducer ,updateimagesReducer} from './reducers/authreducers';
const reducer = combineReducers({
auth:authReducer,
alluser:allUsersReducer,
user: userReducer,
driverdetails:driverDetailsReducer,
driver:authdriver,
images:uploadReducer,
updateimages:updateimagesReducer
})

let initialState={}

const middleware=[thunk]
const store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;