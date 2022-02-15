import Picture from '@components/Picture';
import { Container } from './style';

type MyProps = {
  image: string;
};

const HorizontalNew = ({ image }: MyProps) => {
  return (
    <Container>
      <div className='view'>
        <Picture className='view__picture' image={image} />
      </div>
      <div className='horizontalNew__content'>
        <p className='content__title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        <p className='content__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        <span className='content__date'>00/00/0000</span>
        <button className='content__button'>Ler notícia</button>
      </div>
    </Container>
  );
};

export default HorizontalNew;
