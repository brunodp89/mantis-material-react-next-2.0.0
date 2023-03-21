// next
import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Divider, Typography, useMediaQuery } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnimateButton from 'components/@extended/AnimateButton';
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseSocial from 'sections/auth/auth-forms/FirebaseSocial';

// ================================|| CHECK MAIL ||================================ //

const CheckMail = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page title="Veja seu email">
      <AuthWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h3">Olá, cheque seu email</Typography>
              <Typography color="secondary" sx={{ mb: 0.5, mt: 1.25 }}>
                Você recebeu instruções de recuperação de senha no seu e-mail.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <NextLink href="/auth/login" passHref>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                  Entrar
                </Button>
              </NextLink>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant={matchDownSM ? 'subtitle1' : 'h5'}>Cadastre-se</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FirebaseSocial />
          </Grid>
        </Grid>
      </AuthWrapper>
    </Page>
  );
};

CheckMail.getLayout = function getLayout(page) {
  return <Layout variant="blank">{page}</Layout>;
};

export default CheckMail;
