const defaultState = {
    bounds: {}
};

const filtersReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        default:
            return state;
    }
};

export default filtersReducer;