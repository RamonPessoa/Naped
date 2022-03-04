import Aside from '@components/Aside';
import HorizontalNew from '@components/HorizontalNew';
import { Container } from './style';

const ScrollNews = ({ news }: NewsProps) => {
  const myNews = news;

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
      <Aside news={news} />
    </Container>
  );
};

export default ScrollNews;
