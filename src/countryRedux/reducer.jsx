// import { COUNTRY_NAME } from './action';

// const initialState = {
//   country: [],
//   title:''
// };
// debugger

// const rootReducer=(state = initialState, action)=> {
//   switch(action.type) {
//     case COUNTRY_NAME:{
//           return Object.assign({}, state, {
//           country: state.country.concat(action.payload)
//         });
//         }
      
//     default:
//       return state;
//   };
// }

// export default rootReducer;

import { COUNTRY_NAME } from "./action";

const initialState = {
  countries: []
};

function rootReducer(state = initialState, action) {
  if (action.type === COUNTRY_NAME) {
    return Object.assign({}, state, {
      countries: state.countries.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
