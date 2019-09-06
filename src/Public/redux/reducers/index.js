import {combineReducers} from 'redux';
import user from './users';


const appReducer = combineReducers({
user,

});

export default appReducer;