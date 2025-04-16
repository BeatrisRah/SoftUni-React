import { Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors"



export default function Headers(){
    return(
        <>
        <Typography sx={{px:5, py:2 ,color:'white'}} variant="h2">Hello there!</Typography>
        <Typography sx={{px:5, color:blueGrey[100]}} variant="h4">Here are your notes!</Typography>
        </>
    )
}