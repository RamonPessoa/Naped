import { Container } from './style';
import Link from 'next/link';

const Menu = () => {
  return (
    <Container>
      <li>
        <Link href='/Home'>Home</Link>
      </li>
      <li>
        <Link href='/category/Series'>Séries</Link>
      </li>
      <li>
        <Link href='/category/Filmes'>Filmes</Link>
      </li>
      <li>
        <Link href='/category/Animes'>Animes</Link>
      </li>
      <li>
        <Link href='/category/Games'>Games</Link>
      </li>
    </Container>
  );
};
export default Menu;
