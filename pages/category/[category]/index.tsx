import Head from 'next/head';
import Nav from '@components/Nav';
import CategoryHero from '@components/CategoryHero';
import highlight1 from '@public/highlight1.png';
import Search from '@components/Search';
import NewsList from '@components/NewsList';
import Footer from '@components/Footer';
import { instance } from '@configs/apiConfig';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import E404 from '@pages/404';

const Home = ({ news }: NewsProps) => {
  const [notFound, setNotFound] = useState(true);
  const router = useRouter();
  const { category } = router.query;

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
      (category as string).toLowerCase() === 'series' ||
      (category as string).toLowerCase() === 'filmes' ||
      (category as string).toLowerCase() === 'animes' ||
      (category as string).toLowerCase() === 'games'
    ) {
      setNotFound(false);
    }
    if (!news) setNotFound(true);
  }, []);

  if (notFound) return <E404 />;

  return (
    <>
      <Head>
        <title>Séries</title>
      </Head>
      <Nav />
      <CategoryHero
        image={highlight1.src}
        title={pageTitle(category as string)}
      />
      <Search />
      <NewsList news={news} />
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
