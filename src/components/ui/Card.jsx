import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  return (
    <div
      className='bg-white text-slate-900 rounded-lg py-4 px-7 relative'
      style={{
        backgroundColor: reverse ? 'rgba(255,255,255,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
