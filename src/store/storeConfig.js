import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numbers: function (state = { min: 1, max: 10 }, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
});

const store = createStore(reducers);

export default store;
