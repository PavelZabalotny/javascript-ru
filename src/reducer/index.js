import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './article';
//import selectReducer from './reactSelect';
import filters from './filters';

export default combineReducers({
    count: counterReducer,
    articles,
    filters,
})