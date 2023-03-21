import { useRef, useState } from 'react';

// next
import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Box,
  CardMedia,
  ClickAwayListener,
  Grid,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';
import AnimateButton from 'components/@extended/AnimateButton';
import { drawerWidth } from 'config';

// assets
import { ArrowRightOutlined, WindowsOutlined } from '@ant-design/icons';

const backgroundVector = '/assets/images/mega-menu/back.svg';
const imageChart = '/assets/images/mega-menu/chart.svg';

// ==============================|| HEADER CONTENT - MEGA MENU SECTION ||============================== //

const MegaMenuSection = () => {
  const theme = useTheme();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-180, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top" in={open} {...TransitionProps}>
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                minWidth: 750,
                width: {
                  md: `calc(100vw - 100px)`,
                  lg: `calc(100vw - ${drawerWidth + 100}px)`,
                  xl: `calc(100vw - ${drawerWidth + 140}px)`
                },
                maxWidth: 1024
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <Grid container>
                    <Grid
                      item
                      md={4}
                      sx={{
                        background: `url(${backgroundVector}), linear-gradient(183.77deg, ${theme.palette.primary.main} 11.46%, ${theme.palette.primary[700]} 100.33%)`
                      }}
                    >
                      <Box sx={{ p: 4.5, pb: 3 }}>
                        <Stack sx={{ color: 'background.paper' }}>
                          <Typography variant="h2" sx={{ fontSize: '1.875rem', mb: 1 }}>
                            Explorar componentes
                          </Typography>
                          <Typography variant="h6">
                            Try our pre made component pages to check how it feels and suits as per your need.
                          </Typography>
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: -1 }}>
                            <NextLink href="/components-overview/buttons" passHref>
                              <AnimateButton>
                                <Button
                                  variant="contained"
                                  component={Link}
                                  target="_blank"
                                  color="secondary"
                                  sx={{
                                    bgcolor: 'background.paper',
                                    color: 'text.primary',
                                    '&:hover': { bgcolor: 'background.paper', color: 'text.primary' }
                                  }}
                                  endIcon={<ArrowRightOutlined />}
                                >
                                  View All
                                </Button>
                              </AnimateButton>
                            </NextLink>
                            <CardMedia component="img" src={imageChart} alt="Gráfico" sx={{ mr: -2.5, mb: -2.5, width: 124 }} />
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item md={8}>
                      <Box
                        sx={{
                          p: 4,
                          '& .MuiList-root': {
                            pb: 0
                          },
                          '& .MuiListSubheader-root': {
                            p: 0,
                            pb: 1.5
                          },
                          '& .MuiListItemButton-root': {
                            p: 0.5,
                            '&:hover': {
                              background: 'transparent',
                              '& .MuiTypography-root': {
                                color: 'primary.main'
                              }
                            }
                          }
                        }}
                      >
                        <Grid container spacing={6}>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="textPrimary">
                                    Autenticação
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <NextLink href="/auth/login" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Entrar" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/auth/register" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Registrar" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/auth/reset-password" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Redefinir Senha" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/auth/forgot-password" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Esqueci a Senha" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/auth/code-verification" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Código de Verificação" />
                                </ListItemButton>
                              </NextLink>
                            </List>
                          </Grid>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="textPrimary">
                                    Outras Páginas
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <NextLink href="/" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Sobre" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/contact-us" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="entre em contato" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/pricing" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Preço" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/apps/profiles/user/payment" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Pagamento" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/maintenance/under-construction" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Desenvolvimento" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/maintenance/coming-soon" passHref>
                                <ListItemButton disableRipple component={Link} target="_blank">
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Em breve" />
                                </ListItemButton>
                              </NextLink>
                            </List>
                          </Grid>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="textPrimary">
                                    SAAS Páginas
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <NextLink href="/maintenance/404" passHref>
                                <ListItemButton disableRipple>
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="404 Error" />
                                </ListItemButton>
                              </NextLink>
                              <NextLink href="/" passHref>
                                <ListItemButton disableRipple>
                                  <ListItemIcon>
                                    <Dot size={7} color="secondary" variant="outlined" />
                                  </ListItemIcon>
                                  <ListItemText primary="Landing" />
                                </ListItemButton>
                              </NextLink>
                            </List>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default MegaMenuSection;
