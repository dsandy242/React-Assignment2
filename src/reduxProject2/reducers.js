import action from './actions'
import {TODO_LIST,REMOVE_LIST} from './actions';
const initialState={
    todos:[]
}
const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case TODO_LIST:
            return
            {
                todos:[
                    ...state.todos,
                    {
                        type=action.TODO_LIST,
                        id=action.id
                    }
                ]
            }
        case REMOVE_LIST:
            return{
                todos: state.todos.filter((index)=>index!=action.id)
            };
        default:
                return state;
        }
            }
export default rootReducer;

