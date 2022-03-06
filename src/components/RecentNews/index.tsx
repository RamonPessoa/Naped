import { Container } from './style';
import Banner from '@components/Banner';
import { useEffect, useState } from 'react';

const RecentNews = ({ news }: NewsProps) => {
  const [myNews, setMyNews] = useState<Array<Article>>();

  useEffect(() => {
    setMyNews(() => {
      news?.forEach((news) => (news.date = new Date(news.date)));
      const sorted =
        news && [...news]?.sort((news) => Date.now() - news.date.getDate());
      return sorted?.slice(0, 6);
    });
  }, []);

  return (
    <Container>
      <div className='recents'>
        <h2 className='recents__title'></h2>
        <div className='recents__divider'></div>
        <ul className='recents__list'>
          {myNews &&
            myNews.map((news) => (
              <li className='list__item' key={`recent_${news.id}`}>
                <Banner
                  link={`/category/${news.category}/news/${news.id}`}
                  title={news.title}
                  image={news.images.picture_1}
                />
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default RecentNews;
