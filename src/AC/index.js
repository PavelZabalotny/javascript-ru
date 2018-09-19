import {DELETE_ARTICLE, INCREMENT, SET_SELECT_ARTICLES, RESET_DAY, SELECT_DAY_PICKER} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectReducer(selected){
    return {
        type: SET_SELECT_ARTICLES,
        payload: { selected }
    }
}

export function resetDayPicker(){
    return {
        type: RESET_DAY
    }
}
export function setSelectDayPicker(){
    return {
        type: SELECT_DAY_PICKER
    }
}
