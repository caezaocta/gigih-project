import Sidebar from '../../components/Sidebar'
import SignIn from '../../components/SignIn'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
import { createTheme } from '@mui/material';

const theme = createTheme({
    spacing: [0, 2, 3, 5, 8],
})

const CreatePlaylist = () => {

    return (
        <>
            <Sidebar />
            <Container sx={{ m: 2 }}>
                <Grid>
                    <SignIn />
                    <Typography variant='h6'>CreatePlaylist Page</Typography>
                </Grid>
            </Container>
        </>
    );
};

export default CreatePlaylist;