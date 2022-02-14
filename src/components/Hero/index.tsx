import { Container } from './style';

const Hero = () => {
  return (
    <Container>
      <div className='content'>
        <h1 className='content__head'>Mundo nerd? Naped!</h1>
        <p className='content__slogan'>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
