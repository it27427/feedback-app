import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ display: 'block', width: '100px', margin: 'auto' }}
    />
  );
};

export default Spinner;
