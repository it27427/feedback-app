import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  // CALCULATE RATINGS AVERAGE
  let average =
    feedback.reduce((acc, cur) => {
      return (acc = acc + cur.rating);
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='pt-4 px-4 flex items-center justify-between'>
      <h4 className='text-slate-100'>
        <span className='font-bold'>{feedback.length}</span> Reviews
      </h4>
      <h4 className='text-slate-100'>
        Average Rating:{' '}
        <span className='font-bold'>{isNaN(average) ? 0 : average}</span>
      </h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
