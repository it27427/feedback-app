import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import Spinner from './ui/Spinner';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '@/context/FeedbackContext';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return (
      <div className='p-4'>
        <p className='text-indigo-100 font-semibold'>No Feedback Yet!</p>
      </div>
    );
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='flex flex-col gap-8 pt-8 px-4'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='flex flex-col gap-8 pt-8 px-4'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
