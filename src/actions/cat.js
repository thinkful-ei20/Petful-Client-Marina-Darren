import API_BASE_URL from '../config';

const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
const fetchCatRequest = () => {
  return {
    type : FETCH_CAT_REQUEST
  };  
};

const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
const fetchCatSuccess = (data) =>{
  return {
    type : FETCH_CAT_SUCCESS,
    data
  };
};

const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
const fetchCatError = (error) => {
  return {
    type : FETCH_CAT_ERROR,
    error
  };
};

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/cat`)
    .then(result =>{
      if (result.ok){
        return result.json();
      }
      throw new Error(result);
    })
    .then(data => {
      dispatch(fetchCatSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCatError(err));
    });    
};

export const adoptCat = () => dispatch => {
  return fetch(`${API_BASE_URL}/cat`, {
    method : 'DELETE',
    headers : {
      'content-type': 'application/json'
    }
  })
    .then(result => {
      
    });
};