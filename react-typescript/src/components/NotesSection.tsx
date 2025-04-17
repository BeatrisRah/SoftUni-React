import { Box } from "@mui/material"
import { Note } from '../types/types'
import NoteItem from "./Note"

export default function NotesSection(){
    const noteList: Note[] = [
        {title:'Fruit List', content:['Apples', 'Watermelon']}
    ]

    return(
        <Box sx={{width:'75%', p:2}} >
            {noteList.map(n => (
                <NoteItem {...n} />
            ))}
        </Box>
    )
}