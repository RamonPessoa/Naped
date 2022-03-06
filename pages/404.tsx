import Nav from '@components/Nav';
import { Container } from '@styles/style_404';
import Image from 'next/image';
import spaceship from '@public/404.svg';

const E404 = () => {
  return (
    <>
      <Nav />
      <Container>
        <div className='error__left'>
          <h1>Tenho más notícias para você!</h1>
          <p>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível
          </p>
        </div>
        <div className='error__right'>
          <Image src={spaceship} />
          <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
        </div>
      </Container>
    </>
  );
};

export default E404;
