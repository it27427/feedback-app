import Logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='flex items-center'>
          <img src={Logo} alt='Brand-Logo' className='mr-2' />
          <h1>Feedback UI</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
