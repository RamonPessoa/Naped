import Banner from '@components/Banner';
import { Container } from './style';
import { useEffect } from 'react';

const Highlights = ({ news }: NewsProps) => {
  let myNews = news;
  const highlights = () => {
    if (news) {
      myNews = news.slice(0, 2);
    }
  };

  useEffect(() => {
    highlights();
  }, [news]);
  return (
    <Container>
      {myNews && (
        <>
          <Banner
            link={
              myNews && `/category/${myNews[0].category}/news/${myNews[0].id}`
            }
            title={myNews && myNews[0].title}
            image={myNews && myNews[0].images.picture_1}
            customClass='banner--larger'
          />
          <Banner
            link={
              myNews && `/category/${myNews[1].category}/news/${myNews[1].id}`
            }
            title={myNews && myNews[1].title}
            image={myNews && myNews[1].images.picture_1}
            customClass='banner--smaller banner--2'
          />
          <Banner
            link={`/category/${myNews[2].category}/news/${myNews[2].id}`}
            title={myNews && myNews[2].title}
            image={myNews && myNews[2].images.picture_1}
            customClass='banner--smaller banner--3'
          />
        </>
      )}
      {!myNews && <h2>DB Error</h2>}
    </Container>
  );
};

export default Highlights;
