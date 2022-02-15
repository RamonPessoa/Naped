import Banner from '@components/Banner';
import highlight1 from '@public/highlight1.png';
import { Container } from './style';

const Aside = () => {
  return (
    <Container>
      <ul>
        <li>
          <Banner customClass='banner--aside' image={highlight1.src} />
        </li>
        <li>
          <Banner customClass='banner--aside' image={highlight1.src} />
        </li>
        <li>
          <Banner customClass='banner--aside' image={highlight1.src} />
        </li>
      </ul>
    </Container>
  );
};

export default Aside;
