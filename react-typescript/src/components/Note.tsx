import { Note } from '../types/types'
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';


export default function NoteItem({ title, content }: Note) {
    const isArray = Array.isArray(content);

    return (
        <Card
            sx={{
                backgroundColor: 'grey.900',
                color: 'grey.100',
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: 400,
                m: 2,
            }}
        >
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                {isArray ? (
                    <NoteList content={content} />
                ) : (
                    <Typography variant="body2">{content}</Typography>
                )}
            </CardContent>
        </Card>
    );
}

type NoteListProps = {
    content: string[];
};

const NoteList = ({ content }: NoteListProps) => {
    return (
        <List dense>
            {content.map((item, index) => (
                <ListItem
                    key={index}
                >
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
    );
};