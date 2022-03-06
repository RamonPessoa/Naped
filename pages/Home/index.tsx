import Nav from '@components/Nav';
import Head from 'next/head';
import Hero from '@components/Hero';
import Highlights from '@components/Highlights';
import ScrollNews from '@components/ScrollNews';
import RecentNews from '@components/RecentNews';
import Footer from '@components/Footer';
import { instance } from '@configs/apiConfig';

const Home = ({ news }: NewsProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <Hero />
      <Highlights news={news} />
      <ScrollNews news={news} />
      <RecentNews news={news} />
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await instance.get('/api/series');
    const news = JSON.parse(JSON.stringify(data));
    return { props: { news } };
  } catch (err) {
    const error = JSON.parse(JSON.stringify(err));
    return { props: { error } };
  }
}

export default Home;
