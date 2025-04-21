import { useReducer } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useNoteContext } from '../context/NoteContext';

type CreateModalProps = {
  noteModal: boolean;
  handleClose: () => void;
  modalType: 'Add' | 'List' | null;
};

type NoteFormState = {
  title: string;
  text: string;
  checklist: string[];
};

const initialState: NoteFormState = {
  title: '',
  text: '',
  checklist: [''],
};

type Action =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_CHECKLIST_ITEM'; index: number; value: string }
  | { type: 'ADD_CHECKLIST_ITEM' }
  | { type: 'REMOVE_CHECKLIST_ITEM'; index: number }
  | { type: 'RESET' };

const reducer = (state: NoteFormState, action: Action): NoteFormState => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_CHECKLIST_ITEM':{
      const updated = [...state.checklist];
      updated[action.index] = action.value;
      return { ...state, checklist: updated };
    }
    case 'ADD_CHECKLIST_ITEM':
      return { ...state, checklist: [...state.checklist, ''] };
    case 'REMOVE_CHECKLIST_ITEM':
      return { ...state, checklist: state.checklist.filter((_, i) => i !== action.index) };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default function CreateModal({ noteModal, handleClose, modalType }: CreateModalProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { add } = useNoteContext();

  const handleSave = () => {
    if (!state.title.trim()) return;

    if (modalType === 'Add') {
      add({ title: state.title, content: state.text });
    } else {
      const cleaned = state.checklist.filter((item) => item.trim() !== '');
      add({ title: state.title, content: cleaned });
    }

    dispatch({ type: 'RESET' });
    handleClose();
  };

  const handleCancel = () => {
    dispatch({ type: 'RESET' });
    handleClose();
  };

  return (
    <Modal open={noteModal} onClose={handleCancel}>
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

        {/* Note Title */}
        <TextField
          fullWidth
          variant="outlined"
          label="Note title"
          value={state.title}
          onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
          sx={{
            mb: 2,
            '& .MuiInputBase-input': { color: 'white' },
            '& .MuiInputLabel-root': { color: 'grey.400' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'grey.700' },
          }}
        />

        {/* Note Content or Checklist */}
        {modalType === 'Add' ? (
          <TextField
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
            label="Note content"
            value={state.text}
            onChange={(e) => dispatch({ type: 'SET_TEXT', payload: e.target.value })}
            sx={{
              mb: 2,
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'grey.400' },
            }}
          />
        ) : (
          <Box display="flex" flexDirection="column" gap={1} mb={2}>
            {state.checklist.map((item, index) => (
              <Box key={index} display="flex" alignItems="center" gap={1}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={`Item ${index + 1}`}
                  value={item}
                  onChange={(e) =>
                    dispatch({ type: 'SET_CHECKLIST_ITEM', index, value: e.target.value })
                  }
                  sx={{ input: { color: 'white' }, label: { color: 'grey.400' } }}
                />
                <Button
                  variant="text"
                  onClick={() => dispatch({ type: 'REMOVE_CHECKLIST_ITEM', index })}
                  sx={{ color: 'red' }}
                >
                  ✕
                </Button>
              </Box>
            ))}
            <Button
              variant="outlined"
              onClick={() => dispatch({ type: 'ADD_CHECKLIST_ITEM' })}
              sx={{ color: 'white', borderColor: 'grey.600' }}
            >
              + Add Item
            </Button>
          </Box>
        )}

        {/* Actions */}
        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button variant="text" onClick={handleCancel} sx={{ color: 'grey.400' }}>
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
