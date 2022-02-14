import { Container } from './style';
import Menu from '@components/Menu';
import Button from '@components/Button';
import logo from '@public/logo.svg';
import Image from 'next/image';

const Nav = () => {
  return (
    <Container>
      <Image src={logo} alt='Logo' />
      <div className='nav__right'>
        <Menu />
        <Button />
      </div>
    </Container>
  );
};

export default Nav;
