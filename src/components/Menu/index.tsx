import { Container } from './style';
import Link from 'next/link';

const Menu = () => {
  return (
    <Container>
      <li>
        <Link href='/Home'>Home</Link>
      </li>
      <li>
        <Link href='/Series'>Séries</Link>
      </li>
      <li>
        <Link href='/Filmes'>Filmes</Link>
      </li>
      <li>
        <Link href='/Animes'>Animes</Link>
      </li>
      <li>
        <Link href='/Games'>Games</Link>
      </li>
    </Container>
  );
};
export default Menu;
