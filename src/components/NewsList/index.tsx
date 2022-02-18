import Banner from '@components/Banner';
import highlight1 from '@public/highlight1.png';
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { Container } from './style';

const NewsList = () => {
  const [list, setlist] = useState<Array<React.ReactNode>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const [paginationButtons, setPaginationButtons] = useState<Array<number>>([]);
  const [activeButton, setActiveButton] = useState<number>(1);

  const element = (): Array<JSX.Element> => {
    const list: Array<JSX.Element> = [];
    for (let i = 299; i > 0; i--) {
      list.push(<Banner image={highlight1.src} />);
    }

    return list;
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOnePage = (direction: string) => {
    if (
      (direction === 'left' && currentPage === 1) ||
      (direction === 'right' && currentPage === numberOfPages)
    )
      return;
    if (direction === 'left') {
      setCurrentPage(currentPage - 1);
      setActiveButton(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const buildPagination = () => {
    const pagination: number[] = [];
    for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
      pagination.push(pageNumber);
    }
    setPaginationButtons(pagination);
  };

  const buildPage = (currPage: number) => {
    const itemsPerPage = 12;
    const listStart = (currPage - 1) * itemsPerPage;
    const listEnd = listStart + itemsPerPage;
    const toRender = list.slice(listStart, listEnd);

    return toRender;
  };

  useEffect(() => {
    setlist([...element()]);
  }, []);

  useEffect(() => {
    setActiveButton(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(list.length / 12));
  }, [list]);

  useEffect(() => {
    buildPagination();
  }, [numberOfPages]);
  return (
    <Container>
      <ul className='newsList'>
        {buildPage(currentPage).map((el: React.ReactNode, index: number) => (
          <li className='newsList__item' key={index}>
            {el}
          </li>
        ))}
      </ul>
      <ul className='pagination'>
        <button onClick={() => handleOnePage('left')}>{'<'}</button>
        {paginationButtons.map((el: number, index: number) => (
          <button
            className={el === activeButton ? 'button--active' : ''}
            key={index}
            onClick={() => handlePagination(el)}
          >
            {el}
          </button>
        ))}
        <button onClick={() => handleOnePage('right')}>{'>'}</button>
      </ul>
    </Container>
  );
};

export default NewsList;
