
import AddIcon from '@mui/icons-material/Add';
import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
} from '@mui/material';
import FormatListBulletedAddIcon from '@mui/icons-material/FormatListBulletedAdd';
import { useState } from 'react';
import CreateMOdal from './Modal';

const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <FormatListBulletedAddIcon />, name: 'List' }
];
// TODO OPEN MODEL ON ADD


export default function SpeedDialNav() {
    const [noteModal, setNoteModal] = useState<boolean>(false)
    const [modalType, setModalType] = useState<'Add' | 'List' | null>(null);

    const handleOpen = (actionName: 'Add' | 'List'): void => {
            setNoteModal(true);
            setModalType(actionName);
        
    }

    const handleClose = () => {
        setNoteModal(false);
        setModalType(null);
      };

    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleOpen(action.name as 'Add' | 'List')}
                    />
                ))}
            </SpeedDial>
            <CreateMOdal noteModal={noteModal} handleClose={handleClose} modalType={modalType} />

        </>
    );
}
