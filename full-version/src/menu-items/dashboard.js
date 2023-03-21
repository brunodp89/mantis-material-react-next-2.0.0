// third-party
import { FormattedMessage } from 'react-intl';

// project import
import { useSelector } from 'store';

// assets
import { DashboardOutlined, GoldOutlined } from '@ant-design/icons';

const icons = {
  dashboardOutlined: DashboardOutlined,
  goldOutlined: GoldOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

export const DashboardMenu = () => {
  const { menuDashboard } = useSelector((state) => state.menu);

  const SubChildrenLis = (SubChildrenLis) => {
    return SubChildrenLis?.map((subList) => {
      return {
        ...subList,
        title: <FormattedMessage id={`${subList.title}`} />,
        // @ts-ignore
        icon: icons[subList.icon]
      };
    });
  };

  const menuList = (subList) => {
    let list = {
      ...subList,
      title: <FormattedMessage id={`${subList.title}`} />,
      // @ts-ignore
      icon: icons[subList.icon]
    };

    if (subList.type === 'collapse') {
      list.children = SubChildrenLis(subList.children);
    }
    return list;
  };
  const ChildrenList = menuDashboard?.children?.map((subList) => {
    return menuList(subList);
  });

  const dashboardList = {
    ...menuDashboard,
    title: <FormattedMessage id={`${menuDashboard.title}`} />,
    icon: icons[menuDashboard.icon],
    children: ChildrenList
  };

  return dashboardList;
};
