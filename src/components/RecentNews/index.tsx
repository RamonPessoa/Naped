import { Container } from './style';
import Banner from '@components/Banner';
import highlight1 from '@public/highlight1.png';

const RecentNews = () => {
  return (
    <Container>
      <div className='recents'>
        <h2 className='recents__title'></h2>
        <div className='recents__divider'></div>
        <ul className='recents__list'>
          <li className='list__item'>
            <Banner image={highlight1.src} />
          </li>
          <li className='list__item'>
            <Banner image={highlight1.src} />
          </li>
          <li className='list__item'>
            <Banner image={highlight1.src} />
          </li>
          <li className='list__item'>
            <Banner image={highlight1.src} />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default RecentNews;
