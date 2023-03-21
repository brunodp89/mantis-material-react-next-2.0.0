// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          This site is protected by{' '}
          <Typography component={Link} variant="subtitle2" href="#cash-fast" target="_blank" underline="hover">
            Privacidade
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://www.cashfast.com.br/"
            target="_blank"
            underline="hover"
          >
            Termos de Uso
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://www.cashfast.com.br/"
            target="_blank"
            underline="hover"
          >
            Termos de Serviço
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://www.cashfast.com.br/"
            target="_blank"
            underline="hover"
          >
            CA Privacy Notice
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
