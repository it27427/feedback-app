import { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

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
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
