import { Button,IconButton} from "@mui/material"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';




const todoarr = [{id:1, title:"Work with new ReactNative app",date:"2024-06-12",time:"12:20",status:false},{id:2, title:"Meeting with product owner",date:"2024-06-11",time:"12:20",status:false}];

  

function Todolist(){
    const [todos,setTodo] = useState(todoarr)
    const [text,setText] = useState({id:3, title:"", date:"", time:"", status:false})

    const getTodayDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    const  AddtoDo = ()=>{
        setTodo([...todos,text])
        console.log(todos)

    }
    
    function overline (id:number){

        const updatedlinethrough = todos.map((mytodo)=>{
            if(id===mytodo.id){
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
        <h1>My Todo list </h1>
  <div className="input-container">
    <input
      value={text.title}
      onChange={(event) => setText({ ...text, title: event.target.value })}
      placeholder="Add to do:"
      className="input-field"
    />
        <input
      type="date"
      value={text.date}
      onChange={(event) => setText({ ...text, date: event.target.value })}
      className="input-field"
      min={getTodayDate()}
    />
    <input
      type="time"
      value={text.time}
      onChange={(event) => setText({ ...text, time: event.target.value })}
      className="input-field"
    />

  </div>
  <div className="button-container">
    <Button variant="contained" onClick={AddtoDo} className="add-button">
      Add new to do
    </Button>
  </div>
  <Grid container justifyContent="center" spacing={1}>
    <Grid item xs={12} md={8}>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              className={todo.status === true ? "addline" : "withoutline"}
              key={todo.id}
              onClick={() => overline(todo.id)}
              primary={`${todo.title} - ${todo.date} - ${todo.time}`}
              style={{ backgroundColor: "white", padding: 5, borderRadius: 2, fontWeight: 'bold' }}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
</div>

    )

    function deleteTodo(id: number){

        const updatedtods = todos.filter(item => item.id !== id)
        setTodo(updatedtods)
        console.log(updatedtods)

    }

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
