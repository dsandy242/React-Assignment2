import {createStore} from 'redux'
import Rootreducer from '../reducers/reducers';

export default createStore(
    Rootreducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );