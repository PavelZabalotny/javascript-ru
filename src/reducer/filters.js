import {RESET_DAY, SELECT_DAY_PICKER, SET_SELECT_ARTICLES} from '../constants';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null,
    }
};

export default (filters = defaultFilters, action) => {
    const {type, payload} = action;
    switch (type) {
        case RESET_DAY:
            return {...filters, dateRange: {from: null, to: null}};
        case SELECT_DAY_PICKER:
            return {...filters, dateRange: payload.dateRange};
        case SET_SELECT_ARTICLES:
            return {...filters, selected: payload.selected};
        default:
            return filters
    }
}