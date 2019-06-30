import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { jobList, job, form } from './reducers'

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];

const init = {
  jobList: {
    fetching: false,
    error: null
  },
  job: {
    fetching: false,
    error: null
  },
  form: {
    errors: {

    }
  }
};

const reducer = combineReducers({
  jobList,
  job,
  form
});

const store = createStore(reducer, init, applyMiddleware(...middleware));

export const dispatch = store.dispatch;

export default store