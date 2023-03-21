// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';

// ================================|| CODE VERIFICATION ||================================ //

const CodeVerification = () => (
  <Page title="Verificação de código">
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography variant="h3">Insira o Código de Verificação</Typography>
            <Typography color="secondary">Enviamos para o seu email</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography>Enviamos o código para jone. ****@company.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <AuthCodeVerification />
        </Grid>
      </Grid>
    </AuthWrapper>
  </Page>
);

CodeVerification.getLayout = function getLayout(page) {
  return <Layout variant="blank">{page}</Layout>;
};

export default CodeVerification;
