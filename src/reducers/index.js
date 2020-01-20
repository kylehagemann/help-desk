import * as constants from "../constants/index";

const initialState = {
	loading: false,
	error: null,
	formattedData: []
};

export default function rootReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case constants.FETCH_DATA_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};

		case constants.FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				formattedData: action.payload.formattedData
			};

		case constants.FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				formattedData: []
			};

		case constants.FORMAT_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				formattedData: []
			};

		default:
			return state;
	}
}
