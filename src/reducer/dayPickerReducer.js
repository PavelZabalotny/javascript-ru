import {RESET_DAY, SELECT_DAY_PICKER} from '../constants';

const defaultFilters = {
    dateRange: {
        from: null,
        to: null,
    }
};

export default (filters = defaultFilters, action) => {
    switch (action.type) {
        case RESET_DAY:
            return {...filters, dateRange: {from: null, to: null}};
        case SELECT_DAY_PICKER:
            return {...filters, dateRange: action.payload.dateRange};
        default:
            return filters
    }
}