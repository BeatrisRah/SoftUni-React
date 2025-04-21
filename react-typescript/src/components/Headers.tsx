import { Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors"



export default function Headers(){
    return(
        <>
        <Typography sx={{px:5, py:2 ,color:'white'}} variant="h2">NoteApp</Typography>
        <Typography sx={{px:5, color:blueGrey[200]}} variant="h4">Add new notes!</Typography>
        </>
    )
}