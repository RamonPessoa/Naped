import Nav from '@components/Nav';
import Head from 'next/head';
import Hero from '@components/Hero';
import Highlights from '@components/Highlights';
import ScrollNews from '@components/ScrollNews';

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
    </>
  );
};

export default Home;
