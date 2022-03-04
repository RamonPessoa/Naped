import { Container } from './style';
import Banner from '@components/Banner';
import React, { useEffect, useState } from 'react';

const NEWS_PER_PAGE = 12;

interface MyProps extends NewsProps {
  category: string;
}

export default function NewsList({ news, category }: MyProps) {
  const [visibleNews, setVisibleNews] = useState<Array<Article> | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesButtons, setPagesButtons] = useState<number[]>();
  const newsAmount = news?.length;

  const getNews = (page: number) => {
    const listStart = (page - 1) * NEWS_PER_PAGE;
    const listEnd = listStart + NEWS_PER_PAGE;
    if (!newsAmount) return;
    setVisibleNews(() => news?.slice(listStart, listEnd));
  };

  const buildButtons = () => {
    const buttons: Array<number> = [];
    if (news) {
      for (
        let pageNumber = 1;
        pageNumber <= Math.ceil(news.length / NEWS_PER_PAGE);
        pageNumber++
      ) {
        buttons.push(pageNumber);
      }
      setPagesButtons(buttons);
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getNews(currentPage);
    buildButtons();
  }, [currentPage, news]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <Container>
      <ul className='list__items'>
        {visibleNews?.map((news) => (
          <li key={`${news.category}_${news.id}`}>
            <Banner
              link={`./${news.category}/news/${news.id}`}
              image={news.images.picture_1}
              title={news.title}
            />
          </li>
        ))}
      </ul>
      <ul className='list__buttons'>
        {pagesButtons?.map((pageNumber) => (
          <button
            onClick={() => handlePagination(pageNumber)}
            key={`page${pageNumber}`}
          >
            {pageNumber}
          </button>
        ))}
      </ul>
    </Container>
  );
}
