// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  CardContent,
  CardActions,
  Divider,
  FormHelperText,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// assets
import { DeleteFilled, LinkOutlined } from '@ant-design/icons';

// ==============================|| LAYOUTS- ACTION BAR ||============================== //
function ActionBar() {
  const theme = useTheme();
  return (
    <Page title="Action Bar">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainCard title="Barra de ação simples" content={false}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                      <Stack spacing={0.5}>
                        <InputLabel>Nome</InputLabel>
                        <TextField fullWidth placeholder="Seu nome completo" />
                        <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                  <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                    <Button color="error" size="small">
                      Cancelar
                    </Button>
                    <Button variant="contained" size="small">
                      Enviar
                    </Button>
                  </Stack>
                </CardActions>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Botão de ação" content={false}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                      <Stack spacing={0.5}>
                        <InputLabel>Nome</InputLabel>
                        <TextField fullWidth placeholder="Seu nome completo" />
                        <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                    <Button color="error" size="small">
                      Cancelar
                    </Button>
                    <Typography variant="body2" sx={{ mr: '8px !important' }}>
                      ou
                    </Typography>
                    <Button variant="contained" size="small">
                      Enviar
                    </Button>
                  </Stack>
                </CardActions>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Botão lateral" content={false}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                      <Stack spacing={0.5}>
                        <InputLabel>Nome</InputLabel>
                        <TextField fullWidth placeholder="Seu nome completo" />
                        <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
                    <Tooltip title="Delete Event" placement="top">
                      <IconButton size="large" color="error">
                        <DeleteFilled />
                      </IconButton>
                    </Tooltip>
                    <Stack direction="row" spacing={1} sx={{ px: 1.5, py: 0.75 }}>
                      <Button color="error" size="small">
                        Cancelar
                      </Button>
                      <Button variant="contained" size="small">
                        Enviar
                      </Button>
                    </Stack>
                  </Stack>
                </CardActions>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainCard title="Botão esquerdo" content={false}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                      <Stack spacing={0.5}>
                        <InputLabel>Nome</InputLabel>
                        <TextField fullWidth placeholder="Seu nome completo" />
                        <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                  <Stack direction="row" spacing={1} sx={{ px: 1.5, py: 0.75 }}>
                    <Button color="error" size="small">
                      Cancelar
                    </Button>
                    <Button variant="contained" size="small">
                      Enviar
                    </Button>
                  </Stack>
                </CardActions>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Horizontal" content={false}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                      <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Nome :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={8}>
                      <TextField fullWidth placeholder="Seu nome completo" />
                      <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                  <Stack direction="row" spacing={1} justifyContent="center" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                    <Button color="error" size="small">
                      Cancelar
                    </Button>
                    <Button variant="contained" size="small">
                      Enviar
                    </Button>
                  </Stack>
                </CardActions>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard
                title="Botões superiores"
                content={false}
                secondary={
                  <IconButton>
                    <LinkOutlined style={{ color: theme.palette.primary.main }} />
                  </IconButton>
                }
              >
                <CardContent>
                  <Stack spacing={0.5}>
                    <InputLabel>Nome</InputLabel>
                    <TextField fullWidth placeholder="Seu nome completo" />
                    <FormHelperText>Por favor coloque seu nome completo</FormHelperText>
                  </Stack>
                </CardContent>
                <Divider />
                <CardActions>
                  <Stack direction="row" spacing={1} sx={{ width: 1, px: 1.5, py: 0.75 }}>
                    <Button color="error" size="small">
                      Cancelar
                    </Button>
                    <Button variant="contained" size="small">
                      Enviar
                    </Button>
                  </Stack>
                </CardActions>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
}

ActionBar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActionBar;
