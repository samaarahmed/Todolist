import { Button, Card, Input } from "@mui/material"
import { useState } from "react"


function Todolist(){
    const todoarr = [""]
    const [todos,setTodo] = useState(todoarr)
    const [text,setText] = useState('')

    const  AddtoDo = ()=>{



        setTodo([...todos,text])


    }
    
    return(
        <div className="container">
        <Card style={{backgroundColor: "lightgray"}}>
        <h2>Lägg till saker i listan!</h2>
        <div>
        <input  value={text} onChange={event=>(setText(event.target.value))}/> 
        </div>
        <Button variant="contained" onClick={AddtoDo}>Add new to do</Button>
        <Display todos={todos}></Display>
        </Card>

        </div>

    )
}
export default Todolist

interface Itodo {
    todos : string[]
}

function Display ({todos}:Itodo){
    return(<>
        {todos.map(todo=><li>{todo}</li>)}
 </>
    )

}