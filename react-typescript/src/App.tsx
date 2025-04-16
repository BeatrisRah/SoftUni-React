import { Box } from "@mui/material"
import SpeedDialNav from "./components/SpeedDial"
import { blueGrey } from "@mui/material/colors"


function App() {

  return (
    <>
      <Box sx={{
        backgroundColor: blueGrey[900],
        width:'100%',
        minHeight: '100vh'
      }}>
      
      <SpeedDialNav />
      

      </Box>
    </>
  )
}

export default App
