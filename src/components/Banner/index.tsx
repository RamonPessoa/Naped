import Picture from '@components/Picture';
import { Container } from './style';
type MyProps = {
  customClass?: string;
  image?: string;
  title?: string;
};

const Banner = ({ customClass, image, title }: MyProps) => {
  return (
    <Container className={`banner ${customClass}`}>
      <Picture className='picture' image={image} />
      <p className='banner__text'>{title}</p>
    </Container>
  );
};

export default Banner;
