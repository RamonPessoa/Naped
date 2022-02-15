import Aside from '@components/Aside';
import { Container } from './style';
import highlight1 from '@public/highlight1.png';
import HorizontalNew from '@components/HorizontalNew';

const ScrollNews = () => {
  return (
    <Container>
      <ul className='scrollArea'>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
        <li>
          <HorizontalNew image={highlight1.src} />
        </li>
      </ul>
      <Aside />
    </Container>
  );
};

export default ScrollNews;
