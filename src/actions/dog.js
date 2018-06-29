const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
const fetchDogRequest = () => {
  return {
    type : FETCH_DOG_REQUEST
  };  
};

const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
const fetchDogSuccess = (data) =>{
  return {
    type : FETCH_DOG_SUCCESS,
    data
  };
};

const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
const fetchDogError = (error) => {
  return {
    type : FETCH_DOG_ERROR,
    error
  };
};

export const fetchDOG = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch('URLGOESHERE/api/DOG')
    .then(result =>{
      if (result.ok){
        return result.json();
      }
      throw new Error(result);
    })
    .then(data => {
      dispatch(fetchDogSuccess(data));
    })
    .DOGch(err => {
      dispatch(fetchDogError(err));
    });    
};