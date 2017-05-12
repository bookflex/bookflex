import React, { Component } from 'react';
// import React from 'react';
import { objectOf, string } from 'prop-types';

class Genre extends Component {
  render({ name }) {
    return (
    <div className="book col-md-3">
      <div className="title">{name}</div>
    </div>
    );
  }
}

// const Genre = ({ genre }) => {
//   const { title, coverUrl } = genre;

//   return (
//     <div className="book col-md-3">
//       <div className="cover">
//         <div className="Img">
//           <img src={coverUrl} className="bookImg" alt="genreImage" />
//         </div>
//         <div className="title">{title}</div>
//       </div>
//     </div>
//   );
// };

Genre.propTypes = {
  genre: objectOf(string).isRequired,
};

export default Genre;
