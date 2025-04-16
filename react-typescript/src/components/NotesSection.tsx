import { Box, Card, Typography } from "@mui/material"

type Note = {
    title: string,
    content: string | string[]
}

export default function NotesSection(){
    const noteList: Note[] = [
        {title:'Fruit List', content:['Apples', 'Watermelon']}
    ]

    return(
        <Box sx={{width:'75%', p:2}} >
            {noteList.map(n => (
                <Card key={n.title} sx={{width:'25%'}} variant="outlined">
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {n.title}
                    </Typography>
                </Card>
            ))}
        </Box>
    )
}