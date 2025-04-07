import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numbers: function (state = { min: 7, max: 31 }, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
});

const store = createStore(reducers);

export default store;
