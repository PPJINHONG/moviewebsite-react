import { useState } from 'react';

function Todolist() { 
  const [todo,settodo] = useState("");
  const [todos,settodos] = useState([]);
  const changefunc = (event) => settodo(event.target.value);
  const subfunc = (event) => {
    event.preventDefault();
    
    if(todo === ""){
      return;
    }

    settodo("");
    settodos(currentsArray => [todo,...currentsArray]);
    
  console.log(todo);
  };
  console.log(todos);
  
  return (
    <div>
      
     <h1>co={todos.length}</h1>
     <form onSubmit={subfunc}>
    
      <input value={todo} 
      onChange={changefunc}
      type="text"
      placeholder="write">   
      </input>
    
      <button>add To do</button>
    
    </form>
   <hr />
   <ul>
   {todos.map((item,index) => 
   (
    <li key={index}>{item}</li>
   )
   )}
   </ul>
    </div>
  )
}

export default Todolist;
