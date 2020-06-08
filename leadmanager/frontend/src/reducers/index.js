import {  combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';

export default combineReducers({
    leads,
    errors
});