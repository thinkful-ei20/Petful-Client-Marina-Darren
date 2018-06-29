import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR } from '../actions/cat';
const initialState = {
  cat: {},
  error: null,
  loading: false
};

export default function catReducer(state = initialState, action) {
  if (action.type === FETCH_CAT_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === FETCH_CAT_ERROR) {
    return {
      ...state,
      loading: false,
      error : action.error
    };
  }

  if (action.type === FETCH_CAT_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      cat : action.data
    };
  }

  return state;
}