// material-ui
import { Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; Todos os direitos reservados</Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Link href="#" target="_blank" variant="caption" color="textPrimary">
        Sobre
      </Link>
      <Link href="#" target="_blank" variant="caption" color="textPrimary">
        Privacidade
      </Link>
      <Link href="#" target="_blank" variant="caption" color="textPrimary">
        Termos
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
