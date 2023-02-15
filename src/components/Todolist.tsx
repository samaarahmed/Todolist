import { Button, Card, IconButton, Input, ListItem, ListItemText } from "@mui/material"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { List } from "@mui/icons-material";
import { style } from "@mui/system";

const todoarr = [{id:1, title:"Plugga",status:false},{id:2, title:"spela",status:false}];

function Todolist(){
    const [todos,setTodo] = useState(todoarr)
    const [text,setText] = useState({id:3,title:"",status:false})

    const  AddtoDo = ()=>{

        setTodo([...todos,text])
        console.log(todos)


    }
    
    function overline (id:number){

        const updatedlinethrough = todos.map((mytodo)=>{
            if(id==mytodo.id){
                return{...mytodo,status:!mytodo.status}
            } return mytodo
        });

        setTodo(updatedlinethrough)
        console.log(updatedlinethrough)

    }
   /* const todolist = todos.map((todo)=>(

        <Display key={todo.id} id = {todo.id} title={todo.title}></Display>

        ));*/

    return(
        <div className="container">
        <h2>Lägg till saker i listan!</h2>
        <div>
        <input  value={text.title} onChange={event=>setText({...text,title: event.target.value})} placeholder="Att göra:"/> 
        </div>
        <Button variant="contained" fullWidth onClick={AddtoDo}>Add new to do</Button>
        <div className="container">

      <table className="table table-striped">
      <tbody>
      {todos.map((todo)=>(
          <tr key={todo.id}>
            <td className={todo.status == true? "addline" : "withoutline"} key={todo.id} onClick = {()=>overline(todo.id)}>{todo.title} <button aria-label="delete" onClick={()=>deleteTodo(todo.id)}>
  <DeleteIcon />
</button>
</td>
          </tr>
                  ))}

      </tbody>

      </table>
    </div>

        
        </div>

    )

    function deleteTodo(id: number){

        const updatedtods = todos.filter(item => item.id != id)
        setTodo(updatedtods)
        console.log(updatedtods)

    }
    /*
    <List dense={dense}>
    {generate(
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary="Single-line item"
          secondary={secondary ? 'Secondary text' : null}
        />
      </ListItem>,
    )}
  </List>
*/


}
export default Todolist

/*interface Itodo {
    id : number;
    title: string;
}


function Display ({id,title}:Itodo){
    return(<>
        <div className="container">
      <table className="table table-striped">
      <tbody>
          <tr>
            <td>{title} <IconButton aria-label="delete" onClick={deleteTodo(todo.id)}>
  <DeleteIcon />
</IconButton>
</td>
          </tr>
      </tbody>

      </table>
    </div>

</>
    )

}*/
