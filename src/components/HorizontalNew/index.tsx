import Picture from '@components/Picture';
import { Container } from './style';
import Link from 'next/link';

type MyProps = {
  image: string;
  date: string;
  title: string;
  subtitle: string;
  category: string;
  id: number;
};

const HorizontalNew = ({
  image,
  date,
  title,
  subtitle,
  category,
  id,
}: MyProps) => {
  return (
    <Container>
      <div className='view'>
        <Picture className='view__picture' image={image} />
      </div>
      <div className='horizontalNew__content'>
        <p className='content__title'>{title}</p>
        <p className='content__text'>{subtitle}</p>
        <span className='content__date'>{date}</span>
        <Link href={`/category/${category}/news/${id}`}>
          <button className='content__button'>Ler notícia</button>
        </Link>
      </div>
    </Container>
  );
};

export default HorizontalNew;
