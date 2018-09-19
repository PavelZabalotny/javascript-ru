import {SET_SELECT_ARTICLES} from '../constants';

export default (selected = null, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_SELECT_ARTICLES:
            return payload.selected;
        default:
            return selected
    }
}