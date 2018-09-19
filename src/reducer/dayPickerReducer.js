import {RESET_DAY, SELECT_DAY_PICKER} from '../constants';

const defaultState = {
    from: null,
    to: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case RESET_DAY:
            return {
                from: null,
                to: null,
            };
        case SELECT_DAY_PICKER:
            return {
                from: 122,
                to: 333,
            };
        default:
            return state
    }
}