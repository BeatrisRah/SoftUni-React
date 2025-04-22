import { Box } from "@mui/material"
import SpeedDialNav from "./components/SpeedDial"
import Headers from "./components/Headers"
import NotesSection from "./components/NotesSection"
import NoteContext from "./context/NoteContext"
import { useState } from "react"
import { Note } from "./types/types"


function App() {

    const [noteList, setNoteList] = useState<Note[]>([
      {title:'Fruit List', content:['Apples', 'Watermelon']}
  ])

  const getAll = (): Note[] => {
    return noteList;
  }

  const add = (newNote: Note): void => {
    setNoteList(prev => [...prev, newNote])
  }

  const remove = (title: string):void => {
    setNoteList(prevList => prevList.filter(note => note.title !== title));
  }


  return (
    <>
    <NoteContext.Provider value={{getAll, add, remove}} >
        <Box sx={{
          backgroundColor: '#121212',
          width:'100%',
          minHeight: '100vh',
        }}>
        
        <SpeedDialNav />
        <Headers />
        <NotesSection />

        </Box>
      </NoteContext.Provider>
    </>
  )
}

export default App
