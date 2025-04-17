import { Box } from "@mui/material"
import { Note } from '../types/types'
import NoteItem from "./Note"
import { useState } from "react"

export default function NotesSection(){
    const [noteList, setNoteList] = useState<Note[]>([
        {title:'Fruit List', content:['Apples', 'Watermelon']}
    ])


    return(
        <Box sx={{width:'75%', p:2}} >
            {noteList.map(n => (
                <NoteItem {...n} />
            ))}
        </Box>
    )
}