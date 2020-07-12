// import {applyMiddleware,createStore} from 'redux';
// import rootReducer from './reducer';
// import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';
// const middlewares = [thunk];
// // const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // export default createStore(
// //     rootReducer,
// //    // applyMiddleware(...middlewares),
// //    storeEnhancer(applyMiddleware(middlewares, thunk))
// // )
// const store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(...middlewares)));
//     export default store;


// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from './reducer';
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;


//import loggerMiddleware from './middleware/logger';
//import monitorReducerEnhancer from './enhancers/monitorReducer'
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
const middlewareEnhancer = applyMiddleware( thunk)
const composedEnhancers = compose(middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer, composedEnhancers);
store.subscribe(() => console.log('Look ma, Redux!!'));
export default store;