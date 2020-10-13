import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
   return (      
      <div className="card">
         <div className="content">
            <img className="right floated mini ui image" alt={props.author} src={faker.image.avatar()} />
            <div className="header">{props.author}</div>
            <div className="meta">{props.timeAgo}</div>
            <div className="description">{faker.hacker.phrase()}</div>
         </div>
      </div>
   );
};

export default CommentDetail;