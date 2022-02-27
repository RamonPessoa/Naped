import { Container } from './style';
import Banner from '@components/Banner';
import { useEffect } from 'react';

const RecentNews = ({ news }: NewsProps) => {
  let myNews = news;
  const sortNews = (news: Array<Article>) => {
    news.forEach((el) => (el.date = new Date(el.date)));
    news.sort((date1, date2) => date1.date.getTime() - date2.date.getTime());
    return news;
  };

  useEffect(() => {
    if (myNews) myNews = sortNews(myNews).reverse();
  }, []);

  return (
    <Container>
      <div className='recents'>
        <h2 className='recents__title'></h2>
        <div className='recents__divider'></div>
        <ul className='recents__list'>
          {myNews?.map((news) => (
            <li className='list__item' key={`recent_${news.id}`}>
              <Banner title={news.title} image={news.images.picture_1} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default RecentNews;
