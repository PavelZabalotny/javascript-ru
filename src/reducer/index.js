import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './article';
import selectReducer from './reactSelect';
import filters from './dayPickerReducer';

export default combineReducers({
    count: counterReducer,
    articles,
    selected: selectReducer,
    filters,
})