import axios from 'axios';
export const COUNTRY_NAME = 'COUNTRY_NAME';
export function countryname(country) {
  return { type: COUNTRY_NAME, payload: country };
}
export function getcountry(con) {
             return function(dispatch) {
        return axios.get('https://api.covid19api.com/summary')
               .then((res) => {
                 const con = res.data.Countries;
                 console.log(con);
                {dispatch(countryname(con))
              return con}
               })
               .catch((error) => {
                 console.log(error);
               })
               .finally(() => {
                 console.log("Fanally Block Executed")
               });
    }
  }
