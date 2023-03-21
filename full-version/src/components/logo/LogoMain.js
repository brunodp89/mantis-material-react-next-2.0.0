import Image from 'next/image';
import logo from '/src/assets/images/logo.svg';

const LogoMain = ({ reverse }) => {
  return <Image src={logo} alt="CashFast" width={118} height={35} />;
};

export default LogoMain;
