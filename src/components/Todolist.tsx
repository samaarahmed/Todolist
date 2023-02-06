import { Button, Card, Input } from "@mui/material"

function Todolist(){
    return(
        <div>
        <Card>
        <h2>Lägg till saker i listan!</h2>
        <div>
        <input type="text"/>
        </div>
        <Button variant="contained">Add new to do</Button>

        </Card>

        </div>

    )
}
export default Todolist