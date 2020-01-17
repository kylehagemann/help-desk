import { getData } from '../api/index';
import * as constants from '../constants/index';

const urls = [ 'data/organizations.json', 'data/tickets.json', 'data/users.json' ];

export function fetchData() {
    return async dispatch => {
        dispatch(fetchDataBegin());
        try {
            const collectedData = await getData(urls);
            dispatch(fetchDataSuccess(collectedData));
        }
        catch (error) {
            return dispatch(fetchDataFailure(error));
        }
    };
}



export const fetchDataBegin = () => ({
    type: constants.FETCH_DATA_BEGIN
});

export const fetchDataSuccess = collectedData => ({
    type: constants.FETCH_DATA_SUCCESS,
    payload: { collectedData }
});

export const fetchDataFailure = error => ({
    type: constants.FETCH_DATA_FAILURE,
    payload: { error }
});