import * as BathroomAPI from '../util/bathroom_api_util';

export const RECEIVE_BATHROOMS = "RECEIVE_BATHROOMS";

export const receiveBathrooms = bathrooms => ({
    type: RECEIVE_BATHROOMS,
    bathrooms,
});

export const requestBathrooms = filters => dispatch => (
    BathroomAPI.fetchBathrooms(filters).then( bathrooms => dispatch(receiveBathrooms(bathrooms)))
);