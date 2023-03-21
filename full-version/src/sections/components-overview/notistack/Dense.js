import { useState } from 'react';

// material-ul
import { Button, Checkbox } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { handlerDense } from 'store/reducers/snackbar';
import { dispatch } from 'store';
import toast from 'utils/ToastNotistack';

// ==============================|| NOTISTACK - DENSE ||============================== //

export default function Dense() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch(handlerDense({ dense: event.target.checked }));
  };

  return (
    <MainCard title="Dense">
      <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
      Dense margins
      <Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => toast('Your notification here')}>
        Show snackbar
      </Button>
    </MainCard>
  );
}
