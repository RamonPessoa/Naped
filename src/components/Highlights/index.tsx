import Banner from '@components/Banner';
import { Container } from './style';
import { useEffect } from 'react';

const Highlights = ({ news }: NewsProps) => {
  let myNews = news;
  const highlights = () => {
    if (news) {
      myNews = news.slice(0, 2);
      console.log(myNews);
    }
  };

  useEffect(() => {
    highlights();
  }, [news]);
  return (
    <Container>
      <Banner
        title={myNews && myNews[0].title}
        image={myNews && myNews[0].images.picture_1}
        customClass='banner--larger'
      />
      <Banner
        title={myNews && myNews[1].title}
        image={myNews && myNews[1].images.picture_1}
        customClass='banner--smaller banner--2'
      />
      <Banner
        title={myNews && myNews[2].title}
        image={myNews && myNews[2].images.picture_1}
        customClass='banner--smaller banner--3'
      />
    </Container>
  );
};

export default Highlights;
