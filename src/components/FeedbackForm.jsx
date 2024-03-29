import { useState } from 'react';
import Card from './ui/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2 className='font-bold text-center mb-3'>
          How would you rate your service with us?
        </h2>
        {/* TODO RATING-SELECT COMPONENT */}
        <div className='inputgroup'>
          <input
            type='text'
            placeholder='Write a review'
            className='inputfield'
            onChange={handleTextChange}
            value={text}
          />
          <button className='btn btn-secondary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
