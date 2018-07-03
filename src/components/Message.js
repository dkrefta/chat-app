import React from 'react';
import PropTypes from 'prop-types';


const Message = ({ message, author}) => (

  <p>
  <i> {author} </i>: {message}

  </p>
)

Message.PropTypes = { 
  message: PropTypes.string.isRequired,
  author: Proptypes.string.isRequired
}

export default Message;
