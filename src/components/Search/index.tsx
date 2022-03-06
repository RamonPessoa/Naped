import { StyledInput } from './style';
import Image from 'next/image';
import search from '@public/search.svg';

const Search = () => {
  return (
    <StyledInput>
      <input type='text' placeholder='Quer ajuda na procura? Pesquise aqui' />
      <div className='search__icon'>
        <Image src={search} />
      </div>
    </StyledInput>
  );
};

export default Search;
