import Picture from '@components/Picture';
import { Container } from './style';
type MyProps = {
  customClass?: string;
  image: string;
};

const Banner = ({ customClass, image }: MyProps) => {
  return (
    <Container className={`banner ${customClass}`}>
      <Picture className='picture' image={image} />
      <p className='banner__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </p>
    </Container>
  );
};

export default Banner;
