import { Routes, Route } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

export default function BaseLayout() {

  return (
    <Box>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route/>
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
          >
            <p>BRO</p>
            <p>&copy; 2024</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}