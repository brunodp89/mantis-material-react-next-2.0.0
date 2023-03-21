import { useState } from 'react';

// next
import { useRouter } from 'next/router';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import TabProfile from 'sections/apps/profiles/account/TabProfile';
import TabPersonal from 'sections/apps/profiles/account/TabPersonal';
import TabAccount from 'sections/apps/profiles/account/TabAccount';
import TabPassword from 'sections/apps/profiles/account/TabPassword';
import TabRole from 'sections/apps/profiles/account/TabRole';
import TabSettings from 'sections/apps/profiles/account/TabSettings';

// assets
import { ContainerOutlined, FileTextOutlined, LockOutlined, SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

// ==============================|| PROFILE - ACCOUNT ||============================== //

const AccountProfile = () => {
  const router = useRouter();
  const { tab } = router.query;

  const [value, setValue] = useState(tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(`/apps/profiles/account/${newValue}`);
  };

  return (
    <Page title="Conta Pessoal">
      <MainCard border={false} boxShadow>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="Perfil" icon={<UserOutlined />} value="basic" iconPosition="start" />
            <Tab label="Pessoal" icon={<FileTextOutlined />} value="personal" iconPosition="start" />
            <Tab label="Minha conta" icon={<ContainerOutlined />} value="my-account" iconPosition="start" />
            <Tab label="Mudar a senha" icon={<LockOutlined />} value="password" iconPosition="start" />
            <Tab label="Função" icon={<TeamOutlined />} value="role" iconPosition="start" />
            <Tab label="Configurações" icon={<SettingOutlined />} value="settings" iconPosition="start" />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2.5 }}>
          {tab === 'basic' && <TabProfile />}
          {tab === 'Perfil pessoal' && <TabPersonal />}
          {tab === 'Minha conta' && <TabAccount />}
          {tab === 'Senha' && <TabPassword />}
          {tab === 'Função' && <TabRole />}
          {tab === 'Configurações' && <TabSettings />}
        </Box>
      </MainCard>
    </Page>
  );
};

AccountProfile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AccountProfile;
