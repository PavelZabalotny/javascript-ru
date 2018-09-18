import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './article';
import selectReducer from './reactSelect';

export default combineReducers({
    count: counterReducer,
    articles,
    selected: selectReducer
})