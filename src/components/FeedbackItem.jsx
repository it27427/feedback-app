import { useState } from 'react';

const FeedbackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of feedbck item');

  return (
    <div className='py-10'>
      <div className='bg-white rounded-lg py-4 px-7 relative'>
        <span className='inline-flex items-center justify-center text-center w-10 h-10 rounded-full bg-slate-600 text-white p-3 text-xs font-semibold absolute -left-4 -top-4'>
          {rating}
        </span>
        <h5 className='text-md'>{text}</h5>
      </div>
    </div>
  );
};

export default FeedbackItem;
