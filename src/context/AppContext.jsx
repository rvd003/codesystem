import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  posts: [],
  currentPage: 1,
  cardDesign: 'default',
  feedbackForm: {
    name: '',
    email: '',
    feedbackText: '',
  },
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'TOGGLE_CARD_DESIGN':
      return {
        ...state,
        cardDesign: state.cardDesign === 'default' ? 'alternative' : 'default',
      };
    case 'SET_FEEDBACK':
      return { ...state, feedbackForm: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};