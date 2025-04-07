// src/store/storeConfig.js
import { createStore, combineReducers } from 'redux';

const initialState = {
  min: 7,
  max: 31,
};

function numbersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MIN':
      return { ...state, min: action.payload };
    case 'SET_MAX':
      return { ...state, max: action.payload };
    default:
      return state;
  }
}

const reducers = combineReducers({
  numbers: numbersReducer,
});

const store = createStore(reducers);

export default store;
