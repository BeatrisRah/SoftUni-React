import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedAddIcon from '@mui/icons-material/FormatListBulletedAdd';

const actions = [
    { icon: <AddIcon /> , name: 'Add' },
    { icon: <FormatListBulletedAddIcon /> , name: 'List' }
];

export default function SpeedDialNav() {
    return (
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
                    />
                ))}
        </SpeedDial>
    );
}
