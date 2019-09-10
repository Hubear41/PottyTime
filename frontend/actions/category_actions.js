import * as CategoryAPI from '../util/category_api_util';

export const RECIEVE_CATEGORIES = "RECEIVE_CATEGORIES";

const recieveCategories = categories => ({
    type: RECIEVE_CATEGORIES,
    categories,
});

export const requestCategories = dispatch => {
    return CategoryAPI.requestCategories()
        .then( categories => dispatch(recieveCategories(categories)) );
};