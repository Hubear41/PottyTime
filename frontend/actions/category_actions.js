import * as CategoryAPI from '../util/category_api_util';

export const RECIEVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const REVEAL_FILTER_BAR = "REVEAL_FILTER_BAR";
export const HIDE_FILTER_BAR = 'HIDE_FILTER_BAR';

export const revealFilterBar = () => ({
    type: REVEAL_FILTER_BAR,
});

export const hideFilterBar = () => ({
    type: HIDE_FILTER_BAR,
});

const recieveCategories = categories => ({
    type: RECIEVE_CATEGORIES,
    categories,
});

export const requestCategories = () => dispatch => {
    return CategoryAPI.requestCategories()
        .then( categories => dispatch(recieveCategories(categories)));
};