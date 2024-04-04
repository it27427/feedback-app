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
    const response = await fetch(`/api/feedback`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // ADD-FEEDBACK
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // UPDATE FEEDBACK-ITEM
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/api/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      await fetch(`/api/feedback/${id}`, {
        method: 'DELETE',
      });
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
