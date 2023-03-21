// material-ui
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  RadioGroup,
  Radio,
  Stack,
  TextField,
  Typography
} from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

// assets
import { LockOutlined, LinkOutlined } from '@ant-design/icons';

// ==============================|| LAYOUTS -  COLUMNS ||============================== //
function ColumnsLayouts() {
  return (
    <Page title="Cadastro principal">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard title="Cadastro principal">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Nome</InputLabel>
                  <TextField fullWidth placeholder="Seu nome completo" />
                  <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Email</InputLabel>
                  <TextField fullWidth placeholder="Seu email" />
                  <FormHelperText>Por favor coloque seu email</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Senha</InputLabel>
                  <TextField
                    type="password"
                    fullWidth
                    placeholder="Coloque sua senha"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined />
                        </InputAdornment>
                      )
                    }}
                  />
                  <FormHelperText>Por favor coloque sua senha</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Contato</InputLabel>
                  <TextField fullWidth placeholder="coloque seu número para contato" />
                  <FormHelperText>Por favor coloque seu número para contato</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Site</InputLabel>
                  <TextField
                    fullWidth
                    placeholder="Coloque seu site aqui"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LinkOutlined />
                        </InputAdornment>
                      )
                    }}
                  />
                  <FormHelperText>Por favor coloque seu site</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>CEP</InputLabel>
                  <TextField fullWidth placeholder="Coloque seu CEP" />
                  <FormHelperText>Por favor coloque seu CEP</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Endereço</InputLabel>
                  <TextField fullWidth placeholder="coloque seu endereço" />
                  <FormHelperText>Por favor coloque seu endereço</FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>Tipo de usuário</InputLabel>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Administrador" />
                <FormControlLabel control={<Checkbox />} label="Usuário" />
                <FormHelperText>Selecione o tipo</FormHelperText>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

ColumnsLayouts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ColumnsLayouts;
