import { useState, useContext, useEffect } from 'react';

import FeedbackContext from '@/context/FeedbackContext';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          name='rating'
          id='num1'
          value='1'
          onChange={handleChange}
          checked={selected === 1}
          hidden
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num2'
          value='2'
          onChange={handleChange}
          checked={selected === 2}
          hidden
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num3'
          value='3'
          onChange={handleChange}
          checked={selected === 3}
          hidden
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num4'
          value='4'
          onChange={handleChange}
          checked={selected === 4}
          hidden
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num5'
          value='5'
          onChange={handleChange}
          checked={selected === 5}
          hidden
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num6'
          value='6'
          onChange={handleChange}
          checked={selected === 6}
          hidden
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num7'
          value='7'
          onChange={handleChange}
          checked={selected === 7}
          hidden
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num8'
          value='8'
          onChange={handleChange}
          checked={selected === 8}
          hidden
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num9'
          value='9'
          onChange={handleChange}
          checked={selected === 9}
          hidden
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num10'
          value='10'
          onChange={handleChange}
          checked={selected === 10}
          hidden
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
