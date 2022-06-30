/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */

import {combineReducers} from 'redux';

import contactoReducer from './contactReducer';

export default combineReducers ({
    contacto: contactoReducer,
});