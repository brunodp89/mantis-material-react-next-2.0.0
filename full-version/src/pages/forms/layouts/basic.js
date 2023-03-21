// material-ui
import { Checkbox, Divider, Grid, TextField, FormGroup, FormControlLabel, FormHelperText, InputLabel, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

// ==============================|| LAYOUTS - BASIC ||============================== //
function Layouts() {
  return (
    <Page title="Básico">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <MainCard title="Layout simples">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <InputLabel>Nome</InputLabel>
                <TextField fullWidth placeholder="Seu nome completo" />
                <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Email</InputLabel>
                <TextField fullWidth placeholder="Seu email" />
                <FormHelperText>Por favor coloque seu email</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Senha</InputLabel>
                <TextField type="password" fullWidth placeholder="Coloque sua senha" />
              </Grid>
              <Grid item xs={12}>
                {/* <InputLabel>Language</InputLabel> */}
                {/*  <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                  <FormControlLabel control={<Checkbox />} label="French" />
                  <FormControlLabel control={<Checkbox />} label="Dutch" />
                </FormGroup> */}
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MainCard title="Controle Admin">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <InputLabel>Nome</InputLabel>
                <TextField fullWidth placeholder="Seu nome completo" />
                <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Email</InputLabel>
                <TextField fullWidth placeholder="Seu email" />
                <FormHelperText>Por favor coloque seu email</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Senha</InputLabel>
                <TextField type="password" fullWidth placeholder="Coloque sua senha" />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                {/* <InputLabel>Language</InputLabel>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                  <FormControlLabel control={<Checkbox />} label="French" />
                  <FormControlLabel control={<Checkbox />} label="Dutch" />
                </FormGroup> */}
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

Layouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Layouts;
