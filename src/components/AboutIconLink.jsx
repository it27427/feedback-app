import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutIconLink = () => {
  return (
    <div className='flex justify-end absolute bottom-0 right-3 pb-4'>
      <Link
        to='/about'
        className='text-white transition-colors hover:text-sky-500'
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
