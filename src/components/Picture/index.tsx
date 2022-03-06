import { Container } from './style';

type MyProps = {
  image?: string;
  className?: string;
};

const Picture = ({ image, className }: MyProps) => {
  return (
    <Container className={className} image={image as string}>
      <div className='image'></div>
      <span className='image__tag'>lorem</span>
    </Container>
  );
};

export default Picture;
