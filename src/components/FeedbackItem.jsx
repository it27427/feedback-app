import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '@/context/FeedbackContext';
import Card from './ui/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <span className='inline-flex items-center justify-center text-center w-10 h-10 rounded-full bg-sky-500 text-white p-3 text-xs font-semibold absolute -left-4 -top-4'>
        {item.rating}
      </span>
      <button className='edit'>
        <FaEdit className='text-orange-600' />
      </button>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes className='text-red-600' />
      </button>
      <h5 className='text-md'>{item.text}</h5>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
