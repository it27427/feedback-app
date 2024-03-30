import { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setErrorMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setErrorMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setErrorMessage(null);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2 className='font-bold text-center mb-3'>
          How would you rate your service with us?
        </h2>

        <RatingSelect />

        {/* TODO => RATING-SELECT COMPONENT */}
        <div className='inputgroup'>
          <input
            type='text'
            placeholder='Write a review'
            className='inputfield'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {errorMessage && (
          <p className='message text-sm text-red-600 mt-2'>{errorMessage}</p>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
