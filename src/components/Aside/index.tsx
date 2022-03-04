import Banner from '@components/Banner';
import { Container } from './style';

const Aside = ({ news }: NewsProps) => {
  const myNews = news?.slice(0, 3);
  return (
    <Container>
      <h2 className='aside__title'>Lorem ipsum dolor</h2>
      <div className='aside__divisor'></div>
      <ul>
        {myNews?.map((news) => (
          <li key={`aside_${news.id}`}>
            <Banner
              link={`/category/${news.category}/news/${news.id}`}
              customClass='banner--aside'
              image={news.images.picture_1}
              title={news.title}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Aside;
