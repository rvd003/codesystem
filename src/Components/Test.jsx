// import React, { useState, useEffect } from 'react';
// import './Test.css'



// const Test = () => {
//     const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 6;

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Calculate the range of posts to display on the current page
//   const indexOfLastPost = currentPage * cardsPerPage;
//   const indexOfFirstPost = indexOfLastPost - cardsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Create an array of page numbers for pagination
//   const pageNumbers = Array.from({ length: Math.ceil(posts.length / cardsPerPage) }, (_, index) => index + 1);

//   return (
//     <div className='Main'>
//         <div className='A'>

// <div className='P'>
//         <div className='circle-image'>
//       <img src="https://tse4.mm.bing.net/th?id=OIP.lWXmYgi01HP_Eg7HULwFTwHaH_&pid=Api&P=0&h=180" alt="User" />
//     </div>
//     <div className='par'>
//       <p ><b>Hi,Reader</b><br/>hear is your news</p>
//     </div>
//     </div>




//             <div className='Q'>
//                 <div><p><b>View Toggle</b></p></div>
//                 <div className="toggle-buttons">
//   <button className="toggle-button">
//  1
//   </button>
//   <button className="toggle-button">
//    2
//   </button>
// </div>

//             </div>
//             <div className='R'></div>
//         </div>
//         <div className="B">
//         {currentPosts.map((post, index) => (
//           <div className='Z' key={post.id}>
//             <h2>{index + 1}</h2>
//             <h3 className="ellipsis">{post.title}</h3>
//             <p className="ellipsis">{post.body}</p>
//           </div>
//         ))}
//          <div className="pagination">
//         {pageNumbers.map((pageNumber) => (
//           <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
//             {pageNumber}
//           </button>
//         ))}
//       </div>
//       </div>
     
     
//     </div>
//   )
// }

// export default Test

import React, { useState, useEffect } from 'react';
import './Test.css';

const Test = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState('grid'); // Default to grid view
  const cardsPerPage = 6;

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Calculate the range of posts to display on the current page
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Create an array of page numbers for pagination
  const pageNumbers = Array.from({ length: Math.ceil(posts.length / cardsPerPage) }, (_, index) => index + 1);

  // Toggle view type between grid and vertical
  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === 'grid' ? 'vertical' : 'grid'));
  };

  return (
    <div className='Main'>
      <div className='A'>
        <div className='P'>
          <div className='circle-image'>
            <img src="https://tse4.mm.bing.net/th?id=OIP.lWXmYgi01HP_Eg7HULwFTwHaH_&pid=Api&P=0&h=180" alt="User" />
          </div>
          <div className='par'>
            <p><b>Hi, Reader</b><br />Here is your news</p>
          </div>
        </div>
        <div className='Q'>
          <div>
            <p><b>View Toggle</b></p>
          </div>
          <div className="toggle-buttons">
            <button
              className={`toggle-button ${viewType === 'grid' ? 'active' : ''}`}
              onClick={toggleViewType}
            >
              1
            </button>
            <button
              className={`toggle-button ${viewType === 'vertical' ? 'active' : ''}`}
              onClick={toggleViewType}
            >
              2
            </button>
          </div>
        </div>
        <div className='R'></div>
      </div>
      <div className={`B ${viewType === 'grid' ? 'grid-layout' : 'vertical-layout'}`}>
        {currentPosts.map((post, index) => (
          <div className={`Z ${viewType === 'grid' ? 'grid-style' : 'vertical-style'}`} key={post.id}>
            <h2>{index + 1}</h2>
            <h3 className="ellipsis">{post.title}</h3>
            <p className="ellipsis">{post.body}</p>
          </div>
        ))}
        <div className="pagination">
          {pageNumbers.map((pageNumber) => (
            <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;


