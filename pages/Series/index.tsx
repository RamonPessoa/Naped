import Head from 'next/head';
import Nav from '@components/Nav';
import CategoryHero from '@components/CategoryHero';
import highlight1 from '@public/highlight1.png';
import Search from '@components/Search';
import NewsList from '@components/NewsList';
import Footer from '@components/Footer';
const Home = () => {
  return (
    <>
      <Head>
        <title>Séries</title>
      </Head>
      <Nav />
      <CategoryHero image={highlight1.src} title='Séries' />
      <Search />
      <NewsList />
      <Footer />
    </>
  );
};

export default Home;
