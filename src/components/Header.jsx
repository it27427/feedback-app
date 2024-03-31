import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

const Header = ({ text }) => {
  return (
    <header className='sticky top-0 z-10 bg-slate-800 py-3'>
      <div className='container'>
        <Link to={{ pathname: '/' }}>
          <div className='flex items-center'>
            <img src={Logo} width={36} alt='Brand-Logo' className='mr-2' />
            <h1 className='text-sky-400 font-bold uppercase'>{text}</h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
