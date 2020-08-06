import {combineReducers} from 'redux';

import { postReducers } from './postReducers';
import { userReducer } from '../reducers/users';

export default combineReducers ({
    posts : postReducers,
    users : userReducer
})