const TODO_LIST ='TODO_LIST';
const REMOVE_TODO="REMOVE_TODO";
const todoList=(task)=>{
type:TODO_LIST;
id: task
}
export function removeList(id){
type: REMOVE_TODO;
id=id;
}
export default
{
    todoList,
    TODO_LIST,
    REMOVE_TODO
};