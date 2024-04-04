import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // FETCH-FEEDBACK
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // ADD-FEEDBACK
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // UPDATE FEEDBACK-ITEM
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
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
        updateFeedback,
        deleteFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

/* "start": "concurrently \"npm run server\" \"npm run dev\"" */
