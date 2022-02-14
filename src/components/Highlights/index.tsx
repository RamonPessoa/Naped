import Banner from '@components/Banner';
import { Container } from './style';
const Highlights = () => {
  return (
    <Container>
      <Banner customClass='banner--larger' />
      <Banner customClass='banner--smaller' />
      <Banner customClass='banner--smaller' />
    </Container>
  );
};

export default Highlights;
