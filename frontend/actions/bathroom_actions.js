import * as BathroomAPI from '../util/bathroom_api_util';

export const RECEIVE_BATHROOMS = "RECEIVE_BATHROOMS";
export const RECEIVE_BATHROOM = "RECEIVE_BATHROOM"

export const receiveBathrooms = bathrooms => ({
    type: RECEIVE_BATHROOMS,
    bathrooms,
});

export const receiveBathroom = bathroom => ({
    type: RECEIVE_BATHROOM,
    bathroom
})

export const requestBathrooms = filters => dispatch => (
    BathroomAPI.fetchBathrooms(filters).then(bathrooms => dispatch(receiveBathrooms(bathrooms)))
);

export const requestBathroom = id => dispatch => (
    BathroomAPI.fetchBathroom(id).then(bathroom => dispatch(receiveBathroom(bathroom)))
)