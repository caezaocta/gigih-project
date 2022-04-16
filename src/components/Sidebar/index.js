import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MusicNote from '@mui/icons-material/MusicNote';

const drawerWidth = 240;

export default function Sidebar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar >
                    <Typography variant="h5">Gigih Music</Typography>
                </Toolbar>
                <Divider />
                <List>

                    <ListItem button >
                        <ListItemIcon>
                            <MusicNote />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography variant='subtitle'>Create Playlist</Typography>
                        </ListItemText>
                    </ListItem>

                </List>
                <Divider />
            </Drawer>
        </Box >
    );
}
