import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
}

export default Loading;
