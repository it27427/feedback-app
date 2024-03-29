import PropTypes from 'prop-types';
import Card from './ui/Card';

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <span className='inline-flex items-center justify-center text-center w-10 h-10 rounded-full bg-slate-600 text-white p-3 text-xs font-semibold absolute -left-4 -top-4'>
        {item.rating}
      </span>
      <h5 className='text-md'>{item.text}</h5>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
