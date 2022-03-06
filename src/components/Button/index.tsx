import { StyledButton } from './style';
import Link from 'next/link';

const Button = () => {
  return (
    <StyledButton>
      <Link href='/minha_conta'>
        <a>Minha conta</a>
      </Link>
    </StyledButton>
  );
};

export default Button;
