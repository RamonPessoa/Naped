import Head from 'next/head';
import Nav from '@components/Nav';
import CategoryHero from '@components/CategoryHero';
import Search from '@components/Search';
import NewsList from '@components/NewsList';
import Footer from '@components/Footer';
import { instance } from '@configs/apiConfig';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import E404 from '@pages/404';

const Home = ({ news }: NewsProps) => {
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  const { category } = router.query;
  const [myNews, setMyNews] = useState<Array<Article>>();

  const pageTitle = (category: string) => {
    const options: Record<string, string> = {
      series: 'Séries',
      filmes: 'Filmes',
      animes: 'Animes',
      games: 'Games',
    };

    return options[category];
  };

  useEffect(() => {
    if (
      news?.filter(
        (news) => news.category === (category as string).toLowerCase()
      ).length === 0
    ) {
      setNotFound(true);
    }
  }, [category]);

  useEffect(() => {
    setMyNews(() =>
      news?.filter(
        (news) => news.category === (category as string).toLowerCase()
      )
    );
  }, [category]);

  if (notFound) return <E404 />;

  return (
    <>
      <Head>
        <title>Séries</title>
      </Head>
      <Nav />
      <CategoryHero
        image={myNews && myNews[0].images.picture_1}
        title={pageTitle((category as string).toLowerCase())}
      />
      <Search />
      <NewsList category={category as string} news={myNews} />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryCategory = ctx.params?.category;
  const category = queryCategory?.toString().toLowerCase();
  console.log(category);
  try {
    const { data } = await instance.get(`/api/${category}`);
    const news = JSON.parse(JSON.stringify(data));
    return { props: { news } };
  } catch (err) {
    const error = JSON.parse(JSON.stringify(err));
    return { props: { error } };
  }
};

export default Home;
