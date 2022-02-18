import { Container } from './style';
import Image from 'next/image';
import logo from '@public/logo.svg';

const Footer = () => {
  return (
    <Container>
      <Image src={logo} />
      <p className='footer__text'>
        Todas as imagens de filmes, séries e etc são marcas registradas dos seus
        respectivos proprietários.
      </p>
    </Container>
  );
};

export default Footer;
