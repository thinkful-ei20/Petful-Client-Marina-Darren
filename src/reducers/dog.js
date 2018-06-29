import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from '../actions/dog';

const initialState = {
  dog: {},
  error: null,
  loading: false
};

export default function dogReducer(state=initialState, action){
  
  if(action.type === FETCH_DOG_REQUEST){
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === FETCH_DOG_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }

  if(action.type === FETCH_DOG_SUCCESS){
    return {
      ...state,
      loading: false,
      error: null,
      dog: action.data
    }
  }
  return state;
}