type MyProps = {
  customClass: string;
};

const Banner = ({ customClass }: MyProps) => {
  return (
    <div className={`banner ${customClass}`}>
      <p className='banner__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </p>
    </div>
  );
};

export default Banner;
