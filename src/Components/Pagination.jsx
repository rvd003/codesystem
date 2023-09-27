import React from 'react';
import { useAppContext } from '../context/AppContext';

function Pagination() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="pagination">
      <button onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 })}>
        1
      </button>
      <button onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: 2 })}>
        2
      </button>
      {/* Add more buttons for other pages */}
    </div>
  );
}

export default Pagination;

