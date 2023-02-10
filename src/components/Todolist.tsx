import { Button, Card, Input } from "@mui/material"
import { useState } from "react"

const todoarr = [{id:1, title:"Plugga"},{id:2, title:"spela"}];

function Todolist(){
    const [todos,setTodo] = useState(todoarr)
    const [text,setText] = useState({id:3,title:""})

    const  AddtoDo = ()=>{


        setTodo([...todos,text])
        console.log(todoarr)


    }
    
    const todolist = todos.map((todo)=>(

        <Display key={todo.id} id = {todo.id} title={todo.title}></Display>

        ));

    return(
        <div className="container">
        <h2>Lägg till saker i listan!</h2>
        <div>
        <input  value={text.title} onChange={event=>setText({...text,title: event.target.value})} placeholder="Att göra:"/> 
        </div>
        <Button variant="contained" onClick={AddtoDo}>Add new to do</Button>
        {todolist}
        
        </div>

    )
}
export default Todolist

interface Itodo {
    id : number;
    title: string;
}

function Display ({id,title}:Itodo){
    return(<>
        <li>
            id:{id}  title : {title}
        </li>
</>
    )

}
