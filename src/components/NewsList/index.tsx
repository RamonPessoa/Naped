import { Container } from './style';
import Banner from '@components/Banner';
import React, { useEffect, useState } from 'react';

interface MyProps extends NewsProps {
  category: string;
}

export default function NewsList({ news, category }: MyProps) {
  const [visibleNews, setVisibleNews] = useState<Array<Article> | undefined>();

  const INITIAL_PAGE = 1;
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);
  const [activePage, setActivePage] = useState(INITIAL_PAGE);

  const [pagesButtons, setPagesButtons] = useState<number[]>();

  const INITIAL_BUTTON_RANGE = [0, 4];
  const [buttonsRange, setButtonsRange] = useState(INITIAL_BUTTON_RANGE);

  const NEWS_PER_PAGE = 12;

  const NEWS_AMOUNT = news?.length;
  const NUMBER_OF_PAGES = Math.ceil(NEWS_AMOUNT! / NEWS_PER_PAGE);
  const LAST_POSSIBLE_BUTTON_RANGE = [NUMBER_OF_PAGES - 4, NUMBER_OF_PAGES];

  const getNews = (page: number) => {
    const listStart = (page - 1) * NEWS_PER_PAGE;
    const listEnd = listStart + NEWS_PER_PAGE;
    if (!NEWS_AMOUNT) return;
    setVisibleNews(() => news?.slice(listStart, listEnd));
  };

  const buildButtons = () => {
    const buttons: Array<number> = [];
    for (let pageNumber = 1; pageNumber <= NUMBER_OF_PAGES; pageNumber++) {
      buttons.push(pageNumber);
    }
    if (currentPage > buttonsRange[1]) {
      setButtonsRange((oldRange) => {
        oldRange[0] += 1;
        oldRange[1] += 1;
        return oldRange;
      });
    }
    if (currentPage < buttonsRange[0] + 1) {
      setButtonsRange((oldRange) => {
        oldRange[0] -= 1;
        oldRange[1] -= 1;
        return oldRange;
      });
    }

    if (currentPage === NUMBER_OF_PAGES)
      setButtonsRange(LAST_POSSIBLE_BUTTON_RANGE);
    if (currentPage === 1) setButtonsRange(INITIAL_BUTTON_RANGE);
    setPagesButtons(buttons);
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const pageBackward = () => {
    if (currentPage !== 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const pageForward = () => {
    if (NEWS_AMOUNT) {
      if (currentPage !== NUMBER_OF_PAGES) {
        setCurrentPage((page) => page + 1);
      }
    }
  };

  useEffect(() => {
    getNews(currentPage);
    setActivePage(currentPage);
    buildButtons();
    console.log(currentPage);
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
        {/* BOTÃO PARA A PRIMEIRA PÁGINA */}
        {NUMBER_OF_PAGES > 4 && currentPage > 2 && (
          <button onClick={() => setCurrentPage(1)}>{'<<'}</button>
        )}

        {/* BOTÃO PARA A PÁGINA ANTERIOR */}
        {currentPage > 2 && (
          <button onClick={() => pageBackward()}>{'<'}</button>
        )}

        {pagesButtons
          ?.slice(buttonsRange[0], buttonsRange[1])
          .map((pageNumber) => (
            <button
              className={activePage === pageNumber ? 'button--active' : ''}
              onClick={() => handlePagination(pageNumber)}
              key={`page${pageNumber}`}
            >
              {pageNumber}
            </button>
          ))}

        {/* BOTÃO PARA A PRÓXIMA PÁGINA */}
        {currentPage < NUMBER_OF_PAGES && (
          <button onClick={() => pageForward()}>{'>'}</button>
        )}

        {/* BOTÃO PARA A ULTIMA PÁGINA */}
        {NUMBER_OF_PAGES > 4 && currentPage < NUMBER_OF_PAGES - 1 && (
          <button onClick={() => setCurrentPage(NUMBER_OF_PAGES)}>
            {'>>'}
          </button>
        )}
      </ul>
    </Container>
  );
}
