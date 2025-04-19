import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
  } from '@mui/material';
import { useState } from 'react';

type CreateModalProps = {
    noteModal: boolean, 
    modalType: 'Add' | 'List' | null,
    handleClose: () => void
}

export default function CreateMOdal({noteModal, handleClose , modalType} : CreateModalProps) {
  const [noteText, setNoteText] = useState<string>('');
  const [checkList, setCheckList] = useState<string[]>(['']);
    
    const handleSave = () => {

    }

    const updateCheckList = (index: number, value: string) => {
      const updated = [...checkList];
      updated[index] = value;
      setCheckList(updated);
    };
  
    const addCheckItem = () => {
      setCheckList([...checkList, '']);
    };
  
    const removeCheckItem = (index: number) => {
      const updated = [...checkList];
      updated.splice(index, 1);
      setCheckList(updated);
    };

    
    return (
      <Modal open={noteModal} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'grey.900',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          color: 'white',
        }}
      >
        <Typography variant="h6" mb={2}>
          {modalType === 'Add' ? 'Add a Note' : 'Add a Checklist'}
        </Typography>

        {modalType === 'Add' ? (
          <TextField
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
            label="Note content"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            sx={{ mb: 2, input: { color: 'white' }, label: { color: 'grey.400' } }}
          />
        ) : (
          <Box display="flex" flexDirection="column" gap={1} mb={2}>
            {checkList.map((item, index) => (
              <Box key={index} display="flex" alignItems="center" gap={1}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={`Item ${index + 1}`}
                  value={item}
                  onChange={(e) => updateCheckList(index, e.target.value)}
                  sx={{ input: { color: 'white' }, label: { color: 'grey.400' } }}
                />
                <Button variant="text" onClick={() => removeCheckItem(index)} sx={{ color: 'red' }}>
                  ✕
                </Button>
              </Box>
            ))}
            <Button variant="outlined" onClick={addCheckItem} sx={{ color: 'white', borderColor: 'grey.600' }}>
              + Add Item
            </Button>
          </Box>
        )}

        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button
            variant="text"
            onClick={() => {
              handleClose();
              setNoteText('');
              setCheckList(['']);
            }}
            sx={{ color: 'grey.400' }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
    );
}