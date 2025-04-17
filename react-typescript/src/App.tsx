import { Box } from "@mui/material"
import SpeedDialNav from "./components/SpeedDial"
import Headers from "./components/Headers"
import NotesSection from "./components/NotesSection"


function App() {

  return (
    <>
      <Box sx={{
        backgroundColor: '#121212',
        width:'100%',
        minHeight: '100vh',
      }}>
      
      <SpeedDialNav />
      <Headers />
      <NotesSection />

      </Box>
    </>
  )
}

export default App
