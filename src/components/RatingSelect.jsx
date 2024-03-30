import { useState } from 'react';

const RatingSelect = () => {
  const [selected, setSelected] = useState(10);

  const handleChange = (params) => {
    console.log('changed');
  };

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          name='rating'
          id='num1'
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
