import Banner from '@components/Banner';
import { Container } from './style';
import highlight1 from '@public/highlight1.png';
import highlight2 from '@public/highlight2.png';
import highlight3 from '@public/highlight3.png';

const Highlights = () => {
  return (
    <Container>
      <Banner image={highlight1.src} customClass='banner--larger' />
      <Banner image={highlight2.src} customClass='banner--smaller banner--2' />
      <Banner image={highlight3.src} customClass='banner--smaller banner--3' />
    </Container>
  );
};

export default Highlights;
