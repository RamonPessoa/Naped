import Aside from '@components/Aside';
import HorizontalNew from '@components/HorizontalNew';
import { useEffect } from 'react';
import { Container } from './style';

const ScrollNews = ({ news }: NewsProps) => {
  let myNews = news;
  const sortNews = (news: Array<Article>) => {
    news.forEach((el) => (el.date = new Date(el.date)));
    news.sort((date1, date2) => date1.date.getTime() - date2.date.getTime());
    return news;
  };

  useEffect(() => {
    if (myNews) myNews = sortNews(myNews).reverse();
  }, []);

  const formatedDate = (date: Date): string => {
    const myDate = new Date(date);
    if (myDate) {
      return `${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}`;
    }
    return '';
  };

  return (
    <Container>
      <ul className='scrollArea'>
        {myNews?.map((el) => (
          <li key={`${el.title}_${el.id}`}>
            <HorizontalNew
              image={el.images.picture_1}
              title={el.title}
              subtitle={el.subtitle}
              date={formatedDate(el.date)}
              category={el.category}
              id={el.id}
            />
          </li>
        ))}
      </ul>
      <Aside />
    </Container>
  );
};

export default ScrollNews;
