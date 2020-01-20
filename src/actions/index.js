import { getData } from '../api/index';
import { formatData } from '../helpers/index'
import * as constants from '../constants/index';
import { URLS } from "../data/index"

let collectedData = [];
let formattedData = [];
export function fetchData() {
	return async dispatch => {
		dispatch(fetchDataBegin());
		try {
			collectedData = await getData(URLS);
			try {
				formattedData = formatData(collectedData);
			}
			catch (error) {
				return dispatch(formatDataFailure(error))
			}
			dispatch(fetchDataSuccess(formattedData));
		}
		catch (error) {
			return dispatch(fetchDataFailure(error));
		};
	};
};

export const fetchDataBegin = () => ({
	type: constants.FETCH_DATA_BEGIN
});

export const fetchDataSuccess = formattedData => ({
	type: constants.FETCH_DATA_SUCCESS,
	payload: { formattedData }
});

export const fetchDataFailure = error => ({
	type: constants.FETCH_DATA_FAILURE,
	payload: { error }
});

export const formatDataFailure = error => ({
	type: constants.FORMAT_DATA_FAILURE,
	payload: { error }
});
