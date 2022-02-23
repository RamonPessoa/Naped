import { useRouter } from 'next/router';
import Nav from '@components/Nav';
import RecentNews from '@components/RecentNews';
import Footer from '@components/Footer';
import { Container } from './style';
import { instance } from 'src/configs/apiConfig';

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

  return (
    <>
      <Nav />
      <Container image={article?.images.picture_1}>
        <h1>{article?.title}</h1>
        <h4>{article?.subtitle}</h4>
        <p>
          {article &&
            `${article.date.getDate()}/${
              article.date.getMonth() + 1
            }/${article.date.getFullYear()}`}
        </p>
        <div className='thumb'></div>
        <p>{article?.article}</p>
      </Container>
      <RecentNews />
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await instance.get('/api/series');
  const sNews = JSON.parse(JSON.stringify(data));

  return { props: { sNews } };
}

export default News;
