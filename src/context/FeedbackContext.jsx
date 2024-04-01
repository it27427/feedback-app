import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item one',
      rating: 7,
    },
    {
      id: 2,
      text: 'This is feedback item two',
      rating: 8,
    },
    {
      id: 3,
      text: 'This is feedback item three',
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // ADD-FEEDBACK
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // SET ITEM TO BE UPDATED
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // DELETE-FEEDBACK
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
