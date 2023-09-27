import React from 'react';
import { useAppContext } from '../context/AppContext';

function Card({ post }) {
  const { state } = useAppContext();

  return (
    <div className={`card ${state.cardDesign}`}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button>Remove</button>
    </div>
  );
}

export default Card;