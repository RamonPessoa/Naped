import Picture from '@components/Picture';
import { Container } from './style';
import Link from 'next/link';
type MyProps = {
  customClass?: string;
  image?: string;
  title?: string;
  link: string;
};

const Banner = ({ customClass, image, title, link }: MyProps) => {
  return (
    <Link href={link}>
      <Container className={`banner ${customClass}`}>
        <Picture className='picture' image={image} />
        <p className='banner__text'>{title}</p>
      </Container>
    </Link>
  );
};

export default Banner;
