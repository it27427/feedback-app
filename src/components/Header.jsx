import PropTypes from 'prop-types';

import Logo from '../assets/images/logo.svg';

const Header = ({ text }) => {
  return (
    <header className='bg-sky-900 py-3'>
      <div className='container'>
        <div className='flex items-center'>
          <img src={Logo} width={36} alt='Brand-Logo' className='mr-2' />
          <h1 className='text-white font-bold uppercase'>{text}</h1>
        </div>
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
