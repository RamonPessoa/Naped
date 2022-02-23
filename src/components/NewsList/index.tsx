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
  const [buttonsToShow, setButtonsToShow] = useState<Array<number>>([]);

  const defineButtons = () => {
    const buttons: Array<number> = [];
    buttons.push(paginationButtons[0]);
    buttons.push(paginationButtons[1]);
    if (currentPage > 2) buttons[1] = currentPage;
    if (currentPage === numberOfPages) buttons[1] = numberOfPages - 1;
    buttons.push(numberOfPages);
    // if (currentPage === buttons[2]) buttons.splice(1, 1);

    setButtonsToShow(buttons);
  };

  const element = (): Array<JSX.Element> => {
    const list: Array<JSX.Element> = [];
    for (let i = 299; i > 0; i--) {
      list.push(<Banner key={`banner${i}`} image={highlight1.src} />);
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
      setCurrentPage((oldPage) => oldPage - 1);
      setActiveButton(currentPage);
    } else {
      setCurrentPage((oldPage) => oldPage + 1);
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
    setlist(element());
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

  useEffect(() => {
    defineButtons();
  }, [paginationButtons, currentPage]);
  return (
    <Container>
      <ul className='newsList'>
        {buildPage(currentPage).map((el: React.ReactNode, index: number) => (
          <li className='newsList__item' key={`news${index}`}>
            {el}
          </li>
        ))}
      </ul>

      <ul className='pagination'>
        <button onClick={() => handleOnePage('left')}>{'<'}</button>
        {buttonsToShow.map((el: number, index: number) => {
          return (
            <React.Fragment key={`fragment${index}`}>
              {el !== 2 && el !== 1 && el !== numberOfPages && (
                <button>...</button>
              )}
              <button
                className={el === activeButton ? 'button--active' : ''}
                onClick={() => handlePagination(el)}
              >
                {el}
              </button>

              {el >= 2 && el !== numberOfPages - 1 && el !== numberOfPages && (
                <button>...</button>
              )}
            </React.Fragment>
          );
        })}

        <button onClick={() => handleOnePage('right')}>{'>'}</button>
      </ul>
    </Container>
  );
};

export default NewsList;
