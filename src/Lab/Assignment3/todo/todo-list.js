import todos from "./todos.json";
import TodoItem from "./todo-item";

const TodoList = () => {
 return(
   <>
     <h3>To Do List</h3>
     <ul className="list-group">
       {
         todos.map(todo => {
           return(<TodoItem todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;
