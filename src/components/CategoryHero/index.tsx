import { Container } from './style';
type MyProps = {
  image: string;
  title: string;
};

const CategoryHero = ({ image, title }: MyProps) => {
  return (
    <Container image={image}>
      <div className='categoryHero__image'></div>
      <div className='categoryHero__content'>
        <h1 className='categoryHero__title'>{title}</h1>
        <p className='categoryHero__slogan'>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
    </Container>
  );
};

export default CategoryHero;
