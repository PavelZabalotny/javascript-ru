import React from 'react';
import PropTypes from "prop-types";

export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        user: PropTypes.string
    })
};