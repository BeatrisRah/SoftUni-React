import { Box } from "@mui/material"
import NoteItem from "./Note"
import { useNoteContext } from "../context/NoteContext"

export default function NotesSection(){
    const { getAll } = useNoteContext()

    const noteList = getAll()

    return(
        <Box sx={{width:'75%', p:2, display:'flex', flexWrap:'wrap'}} >
            {noteList.map(n => (
                <NoteItem {...n} />
            ))}
        </Box>
    )
}