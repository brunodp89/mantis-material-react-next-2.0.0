import NextLink from 'next/link';

// material-ui
import { CardContent, Grid, Link, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// assets
const Avatar1 = '/assets/images/users/avatar-1.png';
const Avatar2 = '/assets/images/users/avatar-2.png';
const Avatar3 = '/assets/images/users/avatar-3.png';
const Avatar4 = '/assets/images/users/avatar-4.png';

// ===========================|| DATA WIDGET - TEAM MEMBERS CARD ||=========================== //

const TeamMembers = () => (
  <MainCard
    title="Team Members"
    content={false}
    secondary={
      <NextLink href="#" passHref>
        <Link color="primary">View all</Link>
      </NextLink>
    }
  >
    <CardContent>
      <Grid container spacing={2.5} alignItems="center">
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar1} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography align="left" variant="subtitle1">
                David Jones
              </Typography>
              <Typography align="left" variant="caption" color="secondary">
                Project Leader
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" variant="caption">
                5 min ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar2} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography align="left" variant="subtitle1">
                David Jones
              </Typography>
              <Typography align="left" variant="caption" color="secondary">
                HR Manager
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" variant="caption">
                1 hour ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar3} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography align="left" variant="subtitle1">
                David Jones
              </Typography>
              <Typography align="left" variant="caption" color="secondary">
                Developer
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" variant="caption">
                Yesterday
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar4} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography align="left" variant="subtitle1">
                David Jones
              </Typography>
              <Typography align="left" variant="caption" color="secondary">
                UI/UX Designer
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" variant="caption">
                02-05-2021
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </MainCard>
);

export default TeamMembers;
