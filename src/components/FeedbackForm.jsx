import { useState, useContext, useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import RatingSelect from './RatingSelect';

import FeedbackContext from '@/context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 className='font-bold text-2xl text-center mb-3'>
          How would you rate your service with us?
        </h2>

        <RatingSelect select={(rating) => setRating(rating)} />

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
