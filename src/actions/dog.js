import API_BASE_URL from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
const fetchDogRequest = () => {
  return {
    type : FETCH_DOG_REQUEST
  };  
};

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
const fetchDogSuccess = (data) =>{
  return {
    type : FETCH_DOG_SUCCESS,
    data
  };
};

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
const fetchDogError = (error) => {
  return {
    type : FETCH_DOG_ERROR,
    error
  };
};

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/dog`)
    .then(result =>{
      if (result.ok){
        return result.json();
      }
      throw new Error(result);
    })
    .then(data => {
      dispatch(fetchDogSuccess(data));
    })
    .catch(err => {
      dispatch(fetchDogError(err));
    });    
};

export const adoptDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dog`, {
    method : 'DELETE',
    headers : {
      'content-type': 'application/json'
    }
  })
    .then(result => {
      if (result.ok){
        dispatch(fetchDog());
      }
      throw new Error(result);
    })
    .catch(err => {
      dispatch(fetchDogError(err));
    });
};