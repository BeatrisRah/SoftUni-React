import { Note } from '../types/types'
import { Card, CardContent, Typography, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNoteContext } from '../context/NoteContext';


export default function NoteItem({ title, content }: Note) {
    const isArray = Array.isArray(content);
    const {remove} = useNoteContext()

    return (
        <Card
    sx={{
        position: 'relative',
        backgroundColor: 'grey.900',
        color: 'grey.100',
        borderRadius: 2,
        boxShadow: 3,
        width: 400,
        m: 2,
    }}
>
        <IconButton
            aria-label="delete"
            size="small"
            onClick={() => remove(title)}
            sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'grey.100',
            }}
        >
            <CloseIcon fontSize="small" />
        </IconButton>

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
                    disablePadding
                    sx={{ alignItems: 'center' }}
                >
                    <ListItemButton
                        role={undefined}
                        dense
                        sx={{ py: 0.5, px: 1 }} 
                    >
                        <ListItemIcon sx={{ minWidth: 32, color: 'white' }}>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                sx={{
                                    color: 'white',
                                    '&.Mui-checked': {
                                        color: 'white',
                                    },
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={item}
                            primaryTypographyProps={{ sx: { color: 'white' } }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};