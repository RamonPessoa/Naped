import { useRouter } from 'next/router';
import Nav from '@components/Nav';
import RecentNews from '@components/RecentNews';
import Footer from '@components/Footer';
import { Container } from './style';
import { instance } from '@configs/apiConfig';
import E404 from '@pages/404';
import React from 'react';

type Article = {
  id: number;
  title: string;
  subtitle: string;
  images: Record<string, string>;
  date: Date;
  category: string;
  article: string;
};

type MyProps = {
  sNews: Array<Article>;
};

const News = ({ sNews }: MyProps) => {
  const router = useRouter();
  const { news } = router.query;
  const article = sNews.find((el) => el.id.toString() === news);
  if (article) {
    article.date = new Date(article.date);
  }

  const paragraphs = article?.article.split('\\n');

  const getMonth = (month: number) => {
    const months: Record<number, string> = {
      1: 'Janeiro',
      2: 'Fevereiro',
      3: 'Março',
      4: 'Abril',
      5: 'Maio',
      6: 'Junho',
      7: 'Julho',
      8: 'Agosto',
      9: 'Setembro',
      10: 'Outubro',
      11: 'Novembro',
      12: 'Dezembro',
    };

    return months[month];
  };

  if (!article) {
    console.log(article);
    return <E404 />;
  }

  return (
    <React.StrictMode>
      <Nav />
      <Container image={article?.images.picture_1}>
        <h1>{article?.title}</h1>
        <h4>{article?.subtitle}</h4>
        <p className='news__date'>
          {article &&
            `${article.date.getDate()} de ${getMonth(
              article.date.getMonth() + 1
            )} de ${article.date.getFullYear()}`}
        </p>
        <div className='thumb'></div>
        <div className='news__article'>
          {paragraphs?.map((el, index) => (
            <p key={`paragraph${index}`}>{el}</p>
          ))}
        </div>
      </Container>
      <RecentNews news={sNews} />
      <Footer />
    </React.StrictMode>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await instance.get('/api/series');
    const sNews = JSON.parse(JSON.stringify(data));
    return { props: { sNews } };
  } catch (err) {
    return err;
  }
}

export default News;
