import Nav from '@components/Nav';
import Head from 'next/head';
import Hero from '@components/Hero';
import Highlights from '@components/Highlights';
import ScrollNews from '@components/ScrollNews';
import RecentNews from '@components/RecentNews';
import Footer from '@components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <Hero />
      <Highlights />
      <ScrollNews />
      <RecentNews />
      <Footer />
    </>
  );
};

export default Home;
