// src/CommentBox.js
import React, { useState } from 'react';

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Enter your comment..."
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default CommentBox;
