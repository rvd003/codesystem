import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function FeedbackForm() {
  const { state, dispatch } = useAppContext();
  const [feedback, setFeedback] = useState(state.feedbackForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    dispatch({ type: 'SET_FEEDBACK', payload: feedback });
    setFeedback({
      name: '',
      email: '',
      feedbackText: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={feedback.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={feedback.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <textarea
        name="feedbackText"
        value={feedback.feedbackText}
        onChange={handleInputChange}
        placeholder="Feedback"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;