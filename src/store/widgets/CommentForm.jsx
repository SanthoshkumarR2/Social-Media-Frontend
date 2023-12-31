import React, { useState} from "react";
import { Button, TextField } from "@mui/material";

const CommentForm = ({ onSubmit }) => {
    const [comment, setComment] =  useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== '') {
            onSubmit(comment);
            setComment('');

        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <TextField
          label="Add a comment"
          variant="outlined"
          fullWidth
          value={comment}
          onChange={handleCommentChange}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
          Comment
        </Button>
      </form>
    );
    
    
};

export default CommentForm;